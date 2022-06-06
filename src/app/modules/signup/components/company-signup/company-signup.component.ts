import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LatLngTuple } from 'leaflet';
import { AuthService } from 'src/app/core/services/auth.service';
import { handleFormErrors } from 'src/app/helpers/form-helper';
import { WarningMessenger } from 'src/app/interfaces/warning-messenger';
import { FormBoxMessageQueueService } from 'src/app/modules/form-services/services/form-box-message-queue.service';
import { FormMessageResolverService } from 'src/app/modules/form-services/services/form-message-resolver.service';
import { AddressMapComponent } from 'src/app/modules/map/components/address-map/address-map.component';
import { FormBoxMessageComponent } from 'src/app/modules/shared/components/form-box-message/form-box-message.component';
import { InputComponent } from 'src/app/modules/shared/input/input.component';
import { ValidatorMatchDirective } from '../../directives/validator-match.directive';

@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.scss']
})
export class CompanySignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private authSrv: AuthService, private formQueueSrv: FormBoxMessageQueueService, private formMsgResolver: FormMessageResolverService, private router: Router, private el: ElementRef) { }

  @ViewChildren(InputComponent) public set elForm(value: QueryList<InputComponent>) {
    value.forEach((el: InputComponent) => {
      const name = el.ngControl.name;
      if (!name || name in this.inputRefs) return;
      this.inputRefs[name] = el;
    });
  }

  @ViewChild('addressMap') public set addressMapReference(value: AddressMapComponent) {
    this.inputRefs['address'] = value;
  }

  @ViewChild(FormBoxMessageComponent) public formBoxMsg?: FormBoxMessageComponent;

  public inputRefs: { [key: string]: WarningMessenger } = {}

  public form = this.fb.group({
    nit: ['', [Validators.required]],
    name: ['', [Validators.required]],
    address: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(30)]],
    confirmPassword: ['', [Validators.required]],
  }, { validator: ValidatorMatchDirective.matchWith('password', 'confirmPassword') } as AbstractControlOptions);

  ngOnInit(): void {
    this.el.nativeElement.dataset["theme"] = "enterprise";
  }

  public onAddressMapSelectLocation(e: LatLngTuple) {
    const [ lat, lng ] = e;
    this.form.patchValue({ address: `(${lat}, ${lng})` })
  }

  public onFormSubmit() {
    this.updateFormErrors();
    if (!this.form.valid) return false;
    const { nit, name, address, email, password } = this.form.value;
    this.authSrv.companySignup({ nit, companyName: name, address, email, password }).subscribe({
      next: (response: any) => { this.handleSuccess(response) },
      error: (err: HttpErrorResponse) => { this.handleError(err) }
    });
    return false;
  }

  public handleSuccess(response: any) {
        console.log(response);
        this.formBoxMsg?.hide();
        this.formQueueSrv.store('LoginComponent', { type: 'info', message: this.formMsgResolver.getMessage('SIGNUP_OK') ?? "" })
        this.router.navigateByUrl('/login');
  }

  public handleError(err: HttpErrorResponse) {
    if (typeof err.error !== 'string' && 'msg' in err.error) {
      this.formBoxMsg?.publishMessage({ type: 'error', message: err.error.msg });
    } else {
      this.formBoxMsg?.publishError(err);
    }
  }

  public updateFormErrors() {
    handleFormErrors(this.form, this.inputRefs);
  }
}

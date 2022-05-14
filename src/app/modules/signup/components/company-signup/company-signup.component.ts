import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { getFirstControlError, handleFormErrors } from 'src/app/helpers/form-helper';
import { BasicCompanySignup } from 'src/app/interfaces/basic-company-signup';
import { FormBoxMessageQueueService } from 'src/app/modules/form-services/services/form-box-message-queue.service';
import { FormMessageResolverService } from 'src/app/modules/form-services/services/form-message-resolver.service';
import { FormBoxMessageComponent } from 'src/app/modules/shared/components/form-box-message/form-box-message.component';
import { InputComponent } from 'src/app/modules/shared/input/input.component';
import { ValidatorMatchDirective } from '../../directives/validator-match.directive';

@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.scss']
})
export class CompanySignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private authSrv: AuthService, private formQueueSrv: FormBoxMessageQueueService, private formMsgResolver: FormMessageResolverService) { }

  @ViewChildren(InputComponent) public set elForm(value: QueryList<InputComponent>) {
    value.forEach((el: InputComponent) => {
      const name = el.ngControl.name;
      if (!name || name in this.inputRefs) return;
      this.inputRefs[name] = el;
    });
  }

  @ViewChild(FormBoxMessageComponent) public formBoxMsg?: FormBoxMessageComponent;

  public inputRefs: { [key: string]: InputComponent } = {}

  public form = this.fb.group({
    nit: ['', Validators.compose([Validators.required])],
    name: ['', Validators.compose([Validators.required])],
    address: ['', Validators.compose([Validators.required])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(30)])],
    confirmPassword: ['', Validators.compose([Validators.required])],
  }, { validator: ValidatorMatchDirective.matchWith('password', 'confirmPassword') } as AbstractControlOptions);

  ngOnInit(): void {
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

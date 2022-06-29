import { HttpErrorResponse } from '@angular/common/http';
import { Component, HostBinding, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { handleFormErrors } from 'src/app/helpers/form-helper';
import { FormBoxMessageQueueService } from 'src/app/modules/form-services/services/form-box-message-queue.service';
import { FormMessageResolverService } from 'src/app/modules/form-services/services/form-message-resolver.service';
import { FormBoxMessageComponent } from 'src/app/modules/shared/components/form-box-message/form-box-message.component';
import { InputComponent } from 'src/app/modules/shared/input/input.component';
import { ValidatorMatchDirective } from '../../directives/validator-match.directive';

@Component({
  selector: 'app-guide-signup',
  templateUrl: './guide-signup.component.html',
  styleUrls: ['./guide-signup.component.scss']
})
export class GuideSignupComponent implements OnInit {

  @HostBinding('attr.data-theme') private theme = 'default';
  constructor(private fb: FormBuilder,
    private authSrv: AuthService,
    private router: Router,
    private formQueueSrv: FormBoxMessageQueueService,
    private formMsgResolver: FormMessageResolverService
  ) { }

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
    document: ['', Validators.compose([Validators.required])],
    name: ['', Validators.compose([Validators.required])],
    lastName: ['', Validators.compose([Validators.required])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(30)])],
    confirmPassword: ['', Validators.compose([Validators.required])],
  }, { validator: ValidatorMatchDirective.matchWith('password', 'confirmPassword') } as AbstractControlOptions);

  ngOnInit(): void { }

  public onFormSubmit() {
    this.updateFormErrors();
    if (!this.form.valid) return;
    const { email, password, name, lastName, document } = this.form.value;
    this.authSrv.guideSignup({
      email, password, firstName: name, lastName, NoDocument: document
    }).subscribe({
      next: (response: any) => { this.handleSuccess(response) },
      error: (err: HttpErrorResponse) => { this.handleError(err) }
    });
    return false;
  }

  public handleSuccess(response: any) {
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
    handleFormErrors(this.form, this.inputRefs)
  }
}

import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, HostBinding, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { handleFormErrors } from 'src/app/helpers/form-helper';
import { FormBoxMessageQueueService } from '../form-services/services/form-box-message-queue.service';
import { FormBoxMessageComponent, FormProperties } from '../shared/components/form-box-message/form-box-message.component';
import { InputComponent } from '../shared/input/input.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy, AfterViewInit {

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private formQueueSrv: FormBoxMessageQueueService) { }

  @HostBinding('attr.data-theme') private theme = 'default';
  inputRefs: { [key: string]: InputComponent } = {}
  private destructionSubject = new Subject();

  @ViewChildren(InputComponent) public set elForm(value: QueryList<InputComponent>) {
    value.forEach((el: InputComponent) => {
      const name = el.ngControl.name;
      if (!name || name in this.inputRefs) return;
      this.inputRefs[name] = el;
    });
  }

  @ViewChild(FormBoxMessageComponent) public formBoxMsg?: FormBoxMessageComponent;

  public form: FormGroup = this.fb.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.compose([Validators.required])],
  });

  ngAfterViewInit(): void {
    const handler = (response: FormProperties) => { 
      this.formBoxMsg?.publishMessage(response);
    }
    const distribution = this.formQueueSrv.distribute('LoginComponent');
    distribution.pipe(
        takeUntil(this.destructionSubject.asObservable())
      ).subscribe({
        next: (res) => {
          if (!!res) handler(res);
        },
    });
  }

  ngOnDestroy(): void {
    this.destructionSubject.complete();
  }

  public onFormSubmit() {
    this.updateFormErrors();
    if (!this.form.valid) return;
    const { email, password } = this.form.value;
    this.auth.login(email, password).subscribe({
      next: res => this.handleSuccess(res),
      error: err => this.handleError(err),
    })
    return false;
  }

  public handleSuccess(res: any) {
    this.formBoxMsg?.hide();
    this.router.navigateByUrl('/dashboard');
  }

  public updateFormErrors() {
    handleFormErrors(this.form, this.inputRefs);
  }

  private handleError(err: HttpErrorResponse) {
    this.formBoxMsg?.publishError(err);
  }
}

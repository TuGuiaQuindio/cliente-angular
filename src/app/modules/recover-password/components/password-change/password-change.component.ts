import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { handleFormErrors, WarningMessengerDict } from 'src/app/helpers/form-helper';
import { FormBoxMessageQueueService } from 'src/app/modules/form-services/services/form-box-message-queue.service';
import { ValidatorMatchDirective } from 'src/app/modules/signup/directives/validator-match.directive';
import { RecoverApiService } from '../../services/recover-api.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private recoverSrv: RecoverApiService, private route: ActivatedRoute, private formQueueSrv: FormBoxMessageQueueService) {
    console.warn(route.snapshot.params);
  }
  @ViewChildren(InputValueAccessor) public set hostInputValueAccesor(values: QueryList<InputValueAccessor>) {
    values.forEach(el => {
      if (!el.ngControl || !el.ngControl.name) return;
      this.inputRefs[el.ngControl!.name] = el;
    })
  }

  private inputRefs: WarningMessengerDict = {};

  form = this.fb.group({
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: ValidatorMatchDirective.matchWith('password', 'confirmPassword') } as AbstractControlOptions);

  onFormSubmit(e: Event) {
    e.preventDefault();
    if (!this.recoverSrv.hasToken || !this.recoverSrv.hasEmail) {
      this.router.navigateByUrl('/recover');
      return;
    }

    handleFormErrors(this.form, this.inputRefs);
    if (this.form.valid) {
      const { password } = this.form.value;
      this.recoverSrv.verifyToken(this.recoverSrv.storedToken!)
        .pipe(mergeMap(() => {
          return this.recoverSrv.changePassword(password, this.recoverSrv.storedToken!);
        }))
        .subscribe({
          next: (valid: boolean) => {
            if (valid) {
              this.formQueueSrv.store("LoginComponent", { type: 'information', message: 'Se ha registrado el cambio de contraseña de forma correcta' });
              this.router.navigateByUrl('/login');
            }
          }
        });
    }
  }


  ngOnInit(): void {
  }

}

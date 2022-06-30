import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { handleFormErrors, WarningMessengerDict } from 'src/app/helpers/form-helper';
import { RecoverApiService } from '../../services/recover-api.service';

@Component({
  selector: 'app-verify-token',
  templateUrl: './verify-token.component.html',
  styleUrls: ['./verify-token.component.scss']
})
export class VerifyTokenComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private recoverSrv: RecoverApiService) { }
  @ViewChildren(InputValueAccessor) public set hostInputValueAccesor(values: QueryList<InputValueAccessor>) {
    values.forEach(el => {
      if (!el.ngControl || !el.ngControl.name) return;
      this.inputRefs[el.ngControl!.name] = el;
    })
  }

  private inputRefs: WarningMessengerDict = {};

  form = this.fb.group({
    token: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern(/.*[^\W\s_]/)]]
  });

  onFormSubmit(e: Event) {
    e.preventDefault();
    handleFormErrors(this.form, this.inputRefs);
    if (this.form.valid) {
      const { token } = this.form.value;
      this.recoverSrv.verifyToken(token)
        .subscribe({
          next: () => {
            this.recoverSrv.setToken(token);
            this.router.navigate(['recover', 'password']);
          }
        });
    }
  }


  ngOnInit(): void {
  }

}

import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { handleFormErrors, WarningMessengerDict } from 'src/app/helpers/form-helper';
import { RecoverApiService } from '../../services/recover-api.service';

@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.component.html',
  styleUrls: ['./check-email.component.scss']
})
export class CheckEmailComponent implements OnInit {

  constructor(private fb: FormBuilder, private recoverSrv: RecoverApiService, private router: Router) {
    this.recoverSrv.flush();
  }
  @ViewChildren(InputValueAccessor) public set hostInputValueAccesor(values: QueryList<InputValueAccessor>) {
    values.forEach(el => {
      if (!el.ngControl || !el.ngControl.name) return;
      this.inputRefs[el.ngControl!.name] = el;
    })
  }

  private inputRefs: WarningMessengerDict = {};

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });

  onFormSubmit(e: Event) {
    e.preventDefault();
    handleFormErrors(this.form, this.inputRefs);
    if (this.form.valid) {
      const { email } = this.form.value;
      this.recoverSrv.checkEmail(email)
        .subscribe({
          next: () => {
            this.recoverSrv.setEmail(email);
            this.router.navigateByUrl('/recover/token');
          }
        });
    }
  }

  ngOnInit(): void {
  }

}

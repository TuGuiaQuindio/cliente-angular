import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators } from '@angular/forms';
import { getFirstControlError, handleFormErrors } from 'src/app/helpers/form-helper';
import { FormBoxMessageComponent } from 'src/app/modules/shared/components/form-box-message/form-box-message.component';
import { InputComponent } from 'src/app/modules/shared/input/input.component';
import { ValidatorMatchDirective } from '../../directives/validator-match.directive';

@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.scss']
})
export class CompanySignupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

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
    return false;
  }

  public updateFormErrors() {
    handleFormErrors(this.form, this.inputRefs);
  }
}

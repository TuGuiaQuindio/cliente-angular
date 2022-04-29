import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { getFirstControlError } from 'src/app/helpers/form-helper';
import { InputComponent } from 'src/app/modules/shared/input/input.component';

@Component({
  selector: 'app-guide-signup',
  templateUrl: './guide-signup.component.html',
  styleUrls: ['./guide-signup.component.scss']
})
export class GuideSignupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  @ViewChildren(InputComponent) public set elForm(value: QueryList<InputComponent>) {
    value.forEach((el: InputComponent) => {
      const name = el.ngControl.name;
      if (!name || name in this.inputRefs) return;
      this.inputRefs[name] = el;
    });
  }

  public inputRefs: {[key: string]: InputComponent} = { }

  public form = this.fb.group({
    document: ['', Validators.compose([Validators.required])],
    name: ['', Validators.compose([Validators.required])],
    lastName: ['', Validators.compose([Validators.required])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required])],
    confirmPassword: ['', Validators.compose([Validators.required])],
  });

  ngOnInit(): void {
  }

  public onFormSubmit() {
    this.updateFormErrors();
  }

  public updateFormErrors() {
    const errorKeys = Object.keys(this.form.controls)
    for(let key of errorKeys){
      const control = this.form.controls[key];
      const errorMsg = getFirstControlError(control);
      const inputComponent = this.inputRefs[key];
      if (!inputComponent) return;
      inputComponent.warningMsg = errorMsg;
    }
  }
}

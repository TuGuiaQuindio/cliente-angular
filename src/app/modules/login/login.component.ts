import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { getFirstControlError } from 'src/app/helpers/form-helper';
import { InputComponent } from '../shared/input/input.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  inputRefs: { [key: string]: InputComponent } = {}

  @ViewChildren(InputComponent) public set elForm(value: QueryList<InputComponent>) {
    value.forEach((el: InputComponent) => {
      const name = el.ngControl.name;
      if (!name || name in this.inputRefs) return;
      this.inputRefs[name] = el;
    });
  }

  public form: FormGroup = this.fb.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.compose([Validators.required])],
  });

  ngOnInit(): void {
  }

  public onFormSubmit() {
    this.updateFormErrors();
    const { email, password } = this.form.value;
    this.auth.login(email, password).subscribe();
    return false;
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

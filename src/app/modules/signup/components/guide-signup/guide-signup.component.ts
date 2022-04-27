import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-guide-signup',
  templateUrl: './guide-signup.component.html',
  styleUrls: ['./guide-signup.component.scss']
})
export class GuideSignupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public form = this.fb.group({
    document: [''],
    name: [''],
    lastName: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });

  ngOnInit(): void {
    
  }

  public onFormSubmit() {
    console.log(this.form);
  }
}

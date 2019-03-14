import { Component, OnInit } from '@angular/core';
import { MatInput, MatFormField, MatFormFieldControl, MatOption } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm);
  }
}

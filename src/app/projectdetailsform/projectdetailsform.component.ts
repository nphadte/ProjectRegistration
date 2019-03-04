import { Component, OnInit } from '@angular/core';
import { MatInput, MatFormField, MatFormFieldControl, MatOption} from '@angular/material';
import {  MatDatepicker, MatDatepickerInput, MatDatepickerToggle } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-projectdetailsform',
  templateUrl: './projectdetailsform.component.html',
  styleUrls: ['./projectdetailsform.component.css']
})
export class ProjectdetailsformComponent implements OnInit {

  /*name, address, phone, email, companyname, city, state, zipcode, website */
    projectdetailsForm = new FormGroup({
    projdate: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.projectdetailsForm);
  }
}

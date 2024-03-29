import { Component, OnInit } from '@angular/core';
import { MatInput, MatFormField, MatFormFieldControl, MatOption } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tiledistributorform',
  templateUrl: './tiledistributorform.component.html',
  styleUrls: ['./tiledistributorform.component.css']
})
export class TiledistributorformComponent implements OnInit {

  /*name, address, phone, email, companyname, city, state, zipcode, website */
  tileDistributorForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('', Validators.email),
    company: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(''),
    website: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.tileDistributorForm);
  }
}

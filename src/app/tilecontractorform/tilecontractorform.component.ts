import { Component, OnInit } from '@angular/core';
import { MatInput, MatFormField, MatFormFieldControl, MatOption } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-tilecontractorform',
  templateUrl: './tilecontractorform.component.html',
  styleUrls: ['./tilecontractorform.component.css']
})
export class TilecontractorformComponent implements OnInit {

  /*name, address, phone, email, companyname, city, state, zipcode, website */
  tilecontractorForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
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
    console.log(this.tilecontractorForm);
  }
}

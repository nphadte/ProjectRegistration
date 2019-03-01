import { Component, OnInit } from '@angular/core';
import { MatInput , MatFormField, MatFormFieldControl, MatOption } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-interiordesignerform',
  templateUrl: './interiordesignerform.component.html',
  styleUrls: ['./interiordesignerform.component.css']
})
export class InteriordesignerformComponent implements OnInit {

  /*name, address, phone, email, companyname, city, state, zipcode, website */
  interiorDesignerForm = new FormGroup({
    name: new FormControl(''),
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

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-generalcontractorform',
  templateUrl: './generalcontractorform.component.html',
  styleUrls: ['./generalcontractorform.component.css']
})

export class GeneralcontractorformComponent implements OnInit {

  /*name, address, phone, email, companyname, city, state, zipcode, website */
  generalContractorForm = new FormGroup({
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

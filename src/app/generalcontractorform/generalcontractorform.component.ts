import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-generalcontractorform',
  templateUrl: './generalcontractorform.component.html',
  styleUrls: ['./generalcontractorform.component.css']
})
export class GeneralcontractorformComponent implements OnInit {

  /*name, address, phone, email, company_name, city, state, zip_code, website */
  generalContractorForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    companyname: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipcode: new FormControl(''),
    website: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

}

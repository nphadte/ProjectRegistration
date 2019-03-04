import { Component, OnInit } from '@angular/core';
import { MatInput, MatFormField, MatFormFieldControl, MatOption } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-projectetaform',
  templateUrl: './projectetaform.component.html',
  styleUrls: ['./projectetaform.component.css']
})
export class ProjectetaformComponent implements OnInit {

  /*name, address, phone, email, companyname, city, state, zipcode, website */
  projectetaForm = new FormGroup({
    projectstart: new FormControl(''),
    tileinstall: new FormControl(''),
    completion: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  ngOnSubmit() {
    console.log(this.projectetaForm);
  }
}

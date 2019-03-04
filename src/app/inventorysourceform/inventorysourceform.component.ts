import { Component, OnInit } from '@angular/core';
import { MatInput, MatFormField, MatFormFieldControl, MatOption } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventorysourceform',
  templateUrl: './inventorysourceform.component.html',
  styleUrls: ['./inventorysourceform.component.css']
})
export class InventorysourceformComponent implements OnInit {

  inventorysourceForm = new FormGroup({
    torontoinventory: new FormControl(''),
    directimport: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}

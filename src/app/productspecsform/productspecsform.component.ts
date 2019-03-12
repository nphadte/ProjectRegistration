import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-productspecsform',
  templateUrl: './productspecsform.component.html',
  styleUrls: ['./productspecsform.component.css']
})
export class ProductspecsformComponent implements OnInit {

  UM: string[];

  warehouse: string[];
  filtercrireria: string[];

  constructor() {
    this.UM = ['Pieces(PCS)', 'Boxes (BXS)'];

  }

  ngOnInit() {
    this.UM = ['Pieces(PCS)', 'Boxes (BXS)'];

  }

}

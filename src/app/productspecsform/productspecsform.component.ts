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
    this.UM = ['Sales UM', 'Pieces(PCS)', 'Boxes (BXS)', 'Skids (SKD)'];

    this.warehouse = ['1' , '2'];

    this.filtercrireria = ['A' , 'B'];
  }

  ngOnInit() {
    this.UM = ['Sales UM', 'Pieces(PCS)', 'Boxes (BXS)', 'Skids (SKD)'];

    this.warehouse = ['1', '2'];

    this.filtercrireria = ['A', 'B'];
  }

}

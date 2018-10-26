import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.css']
})
export class ProductCommentsComponent implements OnInit {

  constructor() { }

  @Input()
  set selectedProductId(value : string){
    this._selectedProductId = value;
  }
  
  private _selectedProductId : string;
  ngOnInit() {
    
  }

  info : string[] = [
    "asdaddaaaaafwsfgegeghwrw,jbaefeiofhaeoiffsodfs;nbsdglksbsdbegfwkgbgpogbbgwbgowbwbowbhowfowhb;oiehgg;gisbgobggoiugoedghoirwgiorhgoiwrhgoiwhgfoiwgoiwgoiwrgiogoigobgogliusbgsbg;oshgswo;gwserg",
    "wetrwrwrw",
    "gerger",
    "qeqwe"
  ];
}

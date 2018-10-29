import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.css']
})
export class ProductCommentsComponent implements OnInit {

  constructor() { }

  textAreaValue: string;

  @Input()
  set selectedProduct(value: IProduct) {
    if(value){
    this._selectedProduct = value;
    
    }
  }

  @Output()
  commentAdd: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  private _selectedProduct: IProduct;
  ngOnInit() {

  }
  addCommentsClicked(): void {

    if (this._selectedProduct.productComments)
      this._selectedProduct.productComments.push(this.textAreaValue);
    else
      this._selectedProduct.productComments = [this.textAreaValue];
    this.commentAdd.emit(this._selectedProduct);
  }
}

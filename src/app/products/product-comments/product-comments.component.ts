import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct, IProductComments } from '../interfaces/product';

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
    let product : IProductComments = {
      id : Math.random(),
      dislikes : 0,
      likes:0,
      comment : this.textAreaValue
    };

    if (this._selectedProduct.productComments)
      this._selectedProduct.productComments.push(product);
    else
      this._selectedProduct.productComments = [product];
    this.commentAdd.emit(this._selectedProduct);
  }
}

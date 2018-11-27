import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import {ActivatedRoute} from '@angular/router';
import { ProductDataService } from '../services/product-data.service';

@Component({
  templateUrl: './products-description.component.html',
  styleUrls: ['./products-description.component.css']
})
export class DetailsProductsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductDataService) { }

  products: IProduct[];

  productId : string;
  errorMessage : any;
  selectedProduct : IProduct;

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
     this.products = this.productService.products;

     this.selectedProduct = this.products.find(x => this.productId === x.productCode);
  }

  onCommentAdded(eventArg : IProduct): void{
    let indexValue = this.products.findIndex(item => item.productCode == eventArg.productCode);
    if(indexValue > 0)
    {
      this.products[indexValue].productComments = eventArg.productComments;
    }
  }

}

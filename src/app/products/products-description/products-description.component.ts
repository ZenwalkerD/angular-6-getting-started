import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import {ActivatedRoute} from '@angular/router';
import { ProductDataService } from '../services/product-data.service';

@Component({
  templateUrl: './products-description.component.html',
  styleUrls: ['./products-description.component.css']
})
export class DetailsProductsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductDataService) { 
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');     
  }

  products: IProduct[];

  productId : string;
  errorMessage : any;
  selectedProduct : IProduct;

  ngOnInit() {
    this.productService.productList.subscribe(item => 
      {
        this.selectedProduct = item.find(value => value.productCode == this.productId);
      });    
  }

  onCommentAdded(eventArg : IProduct): void{
    let indexValue = this.products.findIndex(item => item.productCode == eventArg.productCode);
    if(indexValue > 0)
    {
      this.products[indexValue].productComments = eventArg.productComments;
    }
  }

}

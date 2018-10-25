import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../product-list/product';
import {ActivatedRoute} from '@angular/router';
import { ProductDataService } from '../product-list/services/product-data.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css']
})
export class DetailsProductsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductDataService) { }

  products: IProduct[];
  productId : string;
  errorMessage : any;
  productInfo : IProduct;

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProductsData().subscribe(item => {
      this.products= item,
      this.products.forEach(x =>
        console.log("Matching??? " + this.productId == x.productCode))      
    }, 
      error => this.errorMessage = <any> error);    
  }

}

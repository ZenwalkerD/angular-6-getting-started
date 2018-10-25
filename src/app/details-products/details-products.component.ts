import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product-list/product';
import {ActivatedRoute} from '@angular/router';
import { ProductDataService } from '../product-list/services/product-data.service';

@Component({
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css']
})
export class DetailsProductsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductDataService) { }

  products: IProduct[];

  productId : string;
  errorMessage : any;
  selectedProduct : IProduct;

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
     this.productService.getProductsData().subscribe(item => {
      this.products= item,
      this.selectedProduct = this.products.find(x => this.productId === x.productCode)
      console.log(this.selectedProduct.productCode);
    },  
      error => this.errorMessage = <any> error);      
  }
  

}

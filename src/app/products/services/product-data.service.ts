import { Injectable, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService implements OnInit {

  constructor(private httpClientService: HttpClient) {
    this.productDataURL = environment.production ? "http://Server" : "http://localhost:3000/products";
    this.productList = this.httpClientService.get<IProduct[]>(this.productDataURL);
    this.productList.subscribe(item => this.products = item);
  }

  ngOnInit() {
  }
  products: IProduct[];
  productList: Observable<IProduct[]>;

  private productDataURL: string;

  addProductComment(product: IProduct): void {
    this.httpClientService.patch(this.productDataURL + "/" + product.productCode.trim(),
      {
        "productComments": product.productComments
      }).subscribe(data => console.log("Patch Request is succesfull.." + JSON.stringify(data)),
        error => console.log("Error occured during PATCH req.." + error));
  }
}

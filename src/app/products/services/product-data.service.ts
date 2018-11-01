import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private httpClientService: HttpClient) {
    this.productDataURL = environment.production ? "http://Server" : "http://localhost:3000/products";
  }

  getProductsData(): Observable<IProduct[]> {
    return this.httpClientService.get<IProduct[]>(this.productDataURL).pipe(
      //tap(data => console.log("Get successful: " + JSON.stringify(data))),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error);

  }

  private productDataURL: string;

  addProductComment(product : IProduct) : void
  {
    console.log("URL to PATCH..." + this.productDataURL + "/" + product.productCode.trim());

    this.httpClientService.patch(this.productDataURL + "/" + product.productCode.trim(),
    {
      "productComments" : product.productComments
    }).subscribe(data => console.log("Patch Request is succesfull.." + JSON.stringify(data)),
    error => console.log("Error occured during PATCH req.." + error) );
  }
}

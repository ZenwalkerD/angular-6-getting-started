import { Injectable } from '@angular/core';
import { IProduct } from '../product';
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
      tap(error => console.log("Error occured: " + JSON.stringify(error))),
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error);

  }

  private productDataURL: string;
}

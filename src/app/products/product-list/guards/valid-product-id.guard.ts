import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDataService } from '../../services/product-data.service';
import { IProduct } from '../../interfaces/product';

@Injectable({
  providedIn: 'root'/*  */
})
export class ValidProductIdGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let id = next.url[1].path;
    let foundProductCode: IProduct;
    this.productDataService.productList.subscribe(item => {
      foundProductCode = item.find(val => val.productCode === id)
    });

    if (!!foundProductCode) {
      this.router.navigate(['/error']);
      return false;
    }

    return true;
  }
  constructor(private productDataService: ProductDataService, private router: Router) { }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDataService } from '../../services/product-data.service';

@Injectable({
  providedIn: 'root'
})
export class ValidProductIdGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let id = next.url[1].path;
    let foundProductCode = this.productDataService.products.findIndex(item => item.productCode === id);
    if (foundProductCode < 0)
      {
        this.router.navigate(['/error']);
        return false;
      }

    return true;
  }
  constructor(private productDataService: ProductDataService, private router: Router) { }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/pipes/convertToSpace-pipe';
import { StarComponent } from './shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsProductsComponent } from './products/products-description/products-description.component';
import { TruncateHypenPipe } from './shared/pipes/truncate-hypen.pipe';
import { ProductCommentsComponent } from './products/product-comments/product-comments.component';
import { ValidProductIdGuard } from './products/product-list/guards/valid-product-id.guard';

const route: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: DetailsProductsComponent, canActivate: [ValidProductIdGuard] },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'error', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    PageNotFoundComponent,
    DetailsProductsComponent,
    DetailsProductsComponent,
    TruncateHypenPipe, ProductCommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

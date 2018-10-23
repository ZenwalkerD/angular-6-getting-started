import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/pipes/convertToSpace-pipe';
import { StarComponent } from './shared/star/star.component';
import { CommentsToProductsComponent } from './shared/comments-to-products/comments-to-products.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,    
    StarComponent, CommentsToProductsComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }

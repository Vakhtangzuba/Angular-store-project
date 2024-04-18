import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/product-card/products.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './products/add-product/add-product.component';
import { RatingComponent } from './rating/rating.component';
import { ProductDashboardComponent } from './products/product-dashboard/product-dashboard.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductsComponent,
    AddProductComponent,
    RatingComponent,
    ProductDashboardComponent,
    MyHomeComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
  ],
  imports: [HeaderComponent, BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}

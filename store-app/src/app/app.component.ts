import { Component, OnInit } from '@angular/core';
import { ProductService } from './core/services/product.service';
import { NewProduct, Product } from './helpers/interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  // products: Product[] = [];

  // constructor(private _productService: ProductService) {}

  // ngOnInit(): void {
  //   this.products = this._productService.getProducts();
  //   // console.log(this.products);
  // }

  // addProduct(product: NewProduct) {
  //   // console.log('Product will be added ', product);

  //   this._productService.addProduct(product);
  // }
}

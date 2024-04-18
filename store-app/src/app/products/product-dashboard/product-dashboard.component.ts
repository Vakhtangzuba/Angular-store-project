import { Component } from '@angular/core';
import {
  NewProduct,
  Product,
} from '../../helpers/interfaces/product.interface';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrl: './product-dashboard.component.scss',
})
export class ProductDashboardComponent {
  products: Product[] = [];

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.products = this._productService.getProducts();
    // console.log(this.products);
  }

  addProduct(product: NewProduct) {
    // console.log('Product will be added ', product);

    this._productService.addProduct(product);
  }
}

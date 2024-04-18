import { Component, Input } from '@angular/core';
import { Product } from '../../helpers/interfaces/product.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  @Input({ required: true }) product!: Product;

  constructor(private _router: Router) {}

  redirect() {
    this._router.navigate(['my-products', this.product.id]);
  }
}

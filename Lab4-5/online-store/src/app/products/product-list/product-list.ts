import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '..//product-item/product-item';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  onDeleteProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
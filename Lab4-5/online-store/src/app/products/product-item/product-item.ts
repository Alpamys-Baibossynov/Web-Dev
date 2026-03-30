import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [DecimalPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  likeProduct(): void {
    this.product.likes++;
  }

  removeProduct(): void {
    const confirmed = confirm(`Delete "${this.product.name}"?`);
    if (confirmed) {
      this.deleteProduct.emit(this.product.id);
    }
  }

  shareOnWhatsApp(): void {
    const text = `Check this out: ${this.product.name} ${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  }

  shareOnTelegram(): void {
    const text = `Check this out: ${this.product.name}`;
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(text)}`,
      '_blank'
    );
  }
}
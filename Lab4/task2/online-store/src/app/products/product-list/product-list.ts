import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../models/product.model'
import { PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products: Product[] = PRODUCTS;

  currentImageIndex: Record<number, number> = {};

  constructor() {
    this.products.forEach(product => {
      this.currentImageIndex[product.id] = 0;
    });
  }

  getCurrentImage(product: Product): string {
    const index = this.currentImageIndex[product.id] ?? 0;
    return product.images[index];
  }

  selectImage(productId: number, index: number): void {
    this.currentImageIndex[productId] = index;
  }

  nextImage(product: Product): void {
    const current = this.currentImageIndex[product.id] ?? 0;
    this.currentImageIndex[product.id] = (current + 1) % product.images.length;
  }

  prevImage(product: Product): void {
    const current = this.currentImageIndex[product.id] ?? 0;
    this.currentImageIndex[product.id] =
      (current - 1 + product.images.length) % product.images.length;
  }

  getWhatsAppShareLink(product: Product): string {
    const text = `Check out this product: ${product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  getTelegramShareLink(product: Product): string {
    return `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
  }

  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;
    const stars: string[] = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }

    if (hasHalf) {
      stars.push('☆');
    }

    while (stars.length < 5) {
      stars.push('✩');
    }

    return stars;
  }
}
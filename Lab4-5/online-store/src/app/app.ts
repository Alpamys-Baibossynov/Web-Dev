import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list/product-list';
import { ProductService } from './services/product-service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Kaspi Shop';
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.selectedProducts = this.productService.getProductsByCategory(category.id);
  }
}
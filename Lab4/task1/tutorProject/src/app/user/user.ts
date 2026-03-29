import { Component, signal, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [NgOptimizedImage, FormsModule, LowerCasePipe],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  username = 'yOunGTECh';
  favoriteFramework = '';
  readonly name = input<string>();

  logoUrl : string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/1280px-Angular_gradient_logo.png';

  showFramework() {
    alert(this.favoriteFramework);
  }
}

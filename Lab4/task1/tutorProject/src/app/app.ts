import { Component, signal, input, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { User } from './user/user';
import { Child } from './child/child';
import { Comments } from './comments/comments';
import { NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarService } from './car-service';
import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';
import { ReversePipe } from './reverse-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, User, Child, Comments, 
            NgOptimizedImage, ReactiveFormsModule, DecimalPipe,
            DatePipe, CurrencyPipe, ReversePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  city = 'San Francisco';

  isServerRunning = true;

  users = [
    {
      id: '0',
      name: 'Sarah'
    },
    {
      id: '1',
      name: 'Amy'
    },
    {
      id: '2',
      name: 'Rachel'
    },
    {
      id: '3',
      name: 'Jessica'
    },
    {
      id: '4',
      name: 'Poornima'
    }
  ];

  isEditable = true;

  message = ''

  showSecretMessage() {
    this.message = 'Way to go'
  }

  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }

  carService = inject(CarService);
  display = this.carService.getCars().join(' + ');

  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;

  word = 'You are a champion';
}

import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { User } from './pages/user/user';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: Home
    },
    {
        path: 'user',
        title: 'App User Page',
        component: User
    }
];
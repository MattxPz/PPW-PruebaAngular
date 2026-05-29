import { Routes } from '@angular/router';
import { AppHero } from './components/app-hero/app-hero';
import { AppDetail } from './features/app-detail/app-detail';

export const routes: Routes = [

    {path: 'home', component: AppHero},
    {path: 'home/id', component: AppDetail},

    {path: '**', redirectTo: '/home' }
];




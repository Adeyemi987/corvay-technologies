import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home - Corvay Technologies' },
  { path: 'products', component: ProductsComponent, title: 'Products - Corvay Technologies' },
  { path: 'about', component: AboutComponent, title: 'About - Corvay Technologies' },
  { path: 'contact', component: ContactComponent, title: 'Contact - Corvay Technologies' },
  { path: '**', redirectTo: '' }
];

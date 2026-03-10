import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DevAssistComponent } from './pages/dev-assist/dev-assist.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home - Corvay Technologies' },
  { path: 'products', component: ProductsComponent, title: 'Products - Corvay Technologies' },
  { path: 'products/devassist', component: DevAssistComponent, title: 'DevAssist AI - Corvay Technologies' },
  { path: 'about', component: AboutComponent, title: 'About - Corvay Technologies' },
  { path: 'contact', component: ContactComponent, title: 'Contact - Corvay Technologies' },
  { path: '**', redirectTo: '' }
];

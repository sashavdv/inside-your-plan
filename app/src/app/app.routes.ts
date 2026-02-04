import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ArchitectsComponent } from './pages/architects/architects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { PricingComponent } from './pages/pricing/pricing.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'architects', component: ArchitectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

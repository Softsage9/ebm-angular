import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { TestRouteComponent } from './test-route/test-route.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  
  {
    path: 'test', component: TestRouteComponent
  }
];

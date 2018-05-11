import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';


const appRoutes: Routes = [
  {
    path:'',
    component: NewsListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

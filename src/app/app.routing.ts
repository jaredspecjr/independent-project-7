import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { ShowInfoComponent } from './show-info/show-info.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NewsListComponent
  },
  {
    path:'show-info',
    component: ShowInfoComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

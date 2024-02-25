import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./fruits/fruits.module').then(m => m.FruitsModule)
      }
];
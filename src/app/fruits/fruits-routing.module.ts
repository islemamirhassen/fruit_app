import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';

export const fruitroutes: Routes = [
  {
  path: '',
  component: HomeComponent,
},
{
  path: 'fruits/create',
  component: CreateComponent,
},

];

@NgModule({
  imports: [RouterModule.forChild(fruitroutes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FruitsRoutingModule } from './fruits-routing.module';
import { FormsModule } from '@angular/forms';
import { FruitsService } from './fruits.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    FruitsRoutingModule
  ],
  providers: [FruitsService]
})
export class FruitsModule { }

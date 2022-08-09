import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentyRoutingModule } from './componenty-routing.module';
import { ComponentyComponent } from './componenty/componenty.component';


@NgModule({
  declarations: [
    ComponentyComponent
  ],
  imports: [
    CommonModule,
    ComponentyRoutingModule
  ]
})
export class ComponentyModule { }

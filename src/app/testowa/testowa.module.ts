import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestowaRoutingModule } from './testowa-routing.module';
import { TestowaComponent } from './testowa/testowa.component';


@NgModule({
  declarations: [
    TestowaComponent
  ],
  imports: [
    CommonModule,
    TestowaRoutingModule
  ]
})
export class TestowaModule { }

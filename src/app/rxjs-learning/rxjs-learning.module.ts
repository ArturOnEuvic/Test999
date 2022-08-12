import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsLearningRoutingModule } from './rxjs-learning-routing.module';
import { RxjsLearningComponent } from './rxjs-learning.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    RxjsLearningComponent
  ],
  imports: [
    CommonModule,
    RxjsLearningRoutingModule,
    MatButtonModule,
    MatSlideToggleModule
  ]
})
export class RxjsLearningModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RxjsLearningRoutingModule } from './rxjs-learning-routing.module';
import { RxjsLearningComponent } from './rxjs-learning.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    RxjsLearningComponent
  ],
  imports: [
    CommonModule,

    MatInputModule,
    RxjsLearningRoutingModule,
    MatButtonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ]
})
export class RxjsLearningModule { }

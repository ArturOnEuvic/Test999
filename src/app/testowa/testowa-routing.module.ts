import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestowaComponent } from './testowa/testowa.component';

const routes: Routes = [
  {path: '', component: TestowaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestowaRoutingModule { }

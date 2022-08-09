import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentyComponent } from './componenty/componenty.component';

const routes: Routes = [
  {path: '', component: ComponentyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentyRoutingModule { }

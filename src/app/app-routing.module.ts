import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoPageRoutingModule } from './info-page/info-page-routing.module';

const routes: Routes = [
  {
    path: 'info',

    loadChildren: () => import('../app/info-page/info-page.module').then(m => m.InfoPageModule),

    pathMatch: 'full'

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

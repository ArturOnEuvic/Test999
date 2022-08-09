import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestowaModule } from './testowa/testowa.module';
import { StartModule } from './start/start.module';
import { ComponentyModule } from './componenty/componenty.module';
import { InfoPageModule } from './info-page/info-page.module';
import { RxjsLearningModule } from '../app/rxjs-learning/rxjs-learning.module';

const routes: Routes = [
  {
    path: 'info-page',
    loadChildren: () => import('./info-page/info-page.module').then(m => m.InfoPageModule),
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./start/start.module').then(m => m.StartModule),
    pathMatch: 'full'
  },
  {
    path: 'testowa',
    loadChildren: () => import('./testowa/testowa.module').then(m => m.TestowaModule),
    pathMatch: 'full'
  },
  {
    path: 'componenty',
    loadChildren: () => import('./componenty/componenty.module').then(m => m.ComponentyModule),
    pathMatch: 'full'
  },
  {
    path: 'rxjs-learning',
    loadChildren: () => import('../app/rxjs-learning/rxjs-learning.module').then(m => m.RxjsLearningModule),
    pathMatch: 'full'
  },

];


 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StartModule, TestowaModule, InfoPageModule, ComponentyModule, RxjsLearningModule]
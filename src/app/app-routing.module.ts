import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialViewComponent } from './material-view/material-view.component';
import { NormalViewComponent } from './normal-view/normal-view.component';


const routes: Routes = [
  { // path for material view
    path: 'material-view', component: MaterialViewComponent
  },
  { // path for normal view
    path: 'normal-view', component: NormalViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

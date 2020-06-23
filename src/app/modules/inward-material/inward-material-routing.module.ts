import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InwardComponent } from './inward/inward.component';


const routes: Routes = [
  {
    path: '', component: InwardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InwardMaterialRoutingModule { }

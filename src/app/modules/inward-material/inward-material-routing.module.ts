import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InwardComponent } from './inward/inward.component';
import { MaterialTypeComponent } from './material-type/material-type.component';
import { MaterialCompanyComponent } from './material-company/material-company.component';
import { InwardMasterComponent } from './inward-master/inward-master.component';
import { AccessoriesOfMaterialComponent } from './accessories-of-material/accessories-of-material.component';


const routes: Routes = [
  {
    path: '', component: InwardComponent
  },
  {
    path: 'inward-master', component: InwardMasterComponent
  },
  {
    path: 'material-company', component: MaterialCompanyComponent
  },
  {
    path: 'material-type', component: MaterialTypeComponent
  },
  {
    path: 'accessories-material', component: AccessoriesOfMaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InwardMaterialRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { InwardMaterialRoutingModule } from './inward-material-routing.module';
import { InwardComponent } from './inward/inward.component';
import { AccessoriesOfMaterialComponent } from './accessories-of-material/accessories-of-material.component';
import { InwardMasterComponent } from './inward-master/inward-master.component';
import { MaterialCompanyComponent } from './material-company/material-company.component';
import { MaterialTypeComponent } from './material-type/material-type.component';


@NgModule({
  declarations: [
    InwardComponent,
    MaterialTypeComponent,
    MaterialCompanyComponent,
    InwardMasterComponent,
    AccessoriesOfMaterialComponent
  ],
  imports: [
    CommonModule,
    InwardMaterialRoutingModule,
    NgbModule,
    AngularMultiSelectModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class InwardMaterialModule { }

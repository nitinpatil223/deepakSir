import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { InwardMaterialRoutingModule } from './inward-material-routing.module';
import { InwardComponent } from './inward/inward.component';


@NgModule({
  declarations: [
    InwardComponent
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

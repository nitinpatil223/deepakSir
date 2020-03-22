import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MasterRoutingModule } from './master-routing.module';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './add-client/add-client.component';


@NgModule({
  declarations: [ClientComponent, AddClientComponent],
  imports: [
    CommonModule,
    MasterRoutingModule,
    CommonModule,
    NgbModule,
    AngularMultiSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }

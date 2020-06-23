import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClientMasterRoutingModule } from './client-master-routing.module';
import { ClientComponent } from './client/client.component';
import { AddClientComponent } from './add-client/add-client.component';


@NgModule({
  declarations: [ClientComponent, AddClientComponent],
  imports: [
    CommonModule,
    ClientMasterRoutingModule,
    CommonModule,
    NgbModule,
    AngularMultiSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientMasterModule { }

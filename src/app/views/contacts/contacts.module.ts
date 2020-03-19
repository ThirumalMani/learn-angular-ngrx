import { NgModule, /*CUSTOM_ELEMENTS_SCHEMA*/ } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { RouterModule } from '@angular/router'
import {ContactsComponent} from './contacts.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactIndexComponent } from './contact-index/contact-index.component';
import { ContactsRoutingModule} from './contacts-routing.module';
import {SharedModule} from '../../core/modules/shared.module';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactNewComponent,
    ContactIndexComponent
  ],
  imports: [
    /*RouterModule,
    CommonModule,*/
    SharedModule,
    ContactsRoutingModule
  ],
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ContactsModule { }

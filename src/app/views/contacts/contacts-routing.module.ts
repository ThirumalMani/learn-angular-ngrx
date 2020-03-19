import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './contacts.component';
import {ContactNewComponent} from './contact-new/contact-new.component';
import {ContactIndexComponent} from './contact-index/contact-index.component';
import {ContactDetailsComponent} from './contact-details/contact-details.component';
import {ContactEditComponent} from './contact-edit/contact-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
    children: [
      {
        path: '',
        component: ContactIndexComponent,
        data: {title: 'Contacts index'}
      },
      {
        path: 'new',
        component: ContactNewComponent,
        data: {title: 'New contact'}
      },
      {
        path: ':contactId',
        component: ContactDetailsComponent,
        data: {title: 'Contact details'}
      },
      {
        path: ':contactId/edit',
        component: ContactEditComponent,
        data: {title: 'Edit contact'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }

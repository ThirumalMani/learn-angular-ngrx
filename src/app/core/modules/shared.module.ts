import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsComponent } from '../components/contact-details/contact-details.component'
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { ContactListComponent } from '../components/contact-list/contact-list.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    ContactDetailsComponent,
    ContactFormComponent,
    ContactListComponent,
    FooterComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ContactListComponent,
    ContactDetailsComponent,
    ContactFormComponent,
    ToolbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }

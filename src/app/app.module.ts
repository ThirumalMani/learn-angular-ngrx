import { BrowserModule } from '@angular/platform-browser';
import { NgModule, /*CUSTOM_ELEMENTS_SCHEMA*/ } from '@angular/core';
//import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './core/modules/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //RouterModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
exports: [/*RouterModule*/]//,
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

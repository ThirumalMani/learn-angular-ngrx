import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [  
  {
    path:'contacts', loadChildren: () => import(`./views/contacts/contacts.module`).then(m => m.ContactsModule),
    //path: 'contacts', loadChildren: './views/contacts/contacts.module#ContactsModule',
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: '/contacts'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

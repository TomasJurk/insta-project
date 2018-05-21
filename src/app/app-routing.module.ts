import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'signIn', component: SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

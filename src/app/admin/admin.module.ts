import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Material
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

// Service
import { UserService } from './user.service';

// Components
import { AdminComponent } from './admin.component';
import { InfluencersComponent } from './influencers/influencers.component';
import { BrandsComponent } from './brands/brands.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { LoginComponent } from './login/login.component';
import { RegistrationsModalComponent } from './registrations/registrations.component';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  {
    path: 'admin/login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{path: 'registrations', component: RegistrationsComponent}]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{path: 'brands', component: BrandsComponent}]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{path: 'influencers', component: InfluencersComponent}]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{path: 'new-user', component: NewUserComponent}]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{path: 'new-user/:id', component: NewUserComponent}]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  declarations: [
    AdminComponent,
    InfluencersComponent,
    BrandsComponent,
    RegistrationsComponent,
    LoginComponent,
    RegistrationsModalComponent,
    NewUserComponent
  ],
  providers: [UserService],
  entryComponents: [RegistrationsModalComponent],

})
export class AdminModule { }

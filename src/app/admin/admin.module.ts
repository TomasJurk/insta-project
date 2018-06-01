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

// Components
import { AdminComponent } from './admin.component';
import { InfluencersComponent } from './influencers/influencers.component';
import { BrandsComponent } from './brands/brands.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { LoginComponent } from './login/login.component';
import { RegistrationsModalComponent } from './registrations/registrations.component';

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
    MatTableModule
  ],
  declarations: [
    AdminComponent,
    InfluencersComponent,
    BrandsComponent,
    RegistrationsComponent,
    LoginComponent,
    RegistrationsModalComponent
  ],
  entryComponents: [RegistrationsModalComponent]
})
export class AdminModule { }

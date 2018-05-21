import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    RegisterComponent,
    AboutComponent,
    SignInComponent,
    PersonalProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

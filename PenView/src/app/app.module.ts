import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { from } from 'rxjs';

import { RegisterComponent } from './components/register/register.component';
import { LessorComponent } from './components/lessor/lessor.component';
import { AdminComponent } from './components/admin/admin.component';
import { MapComponent } from './components/map/map.component';
import { AppRoutingModule } from './app.routing';

import { PersonService } from './servicios/person.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LessorComponent,
    AdminComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

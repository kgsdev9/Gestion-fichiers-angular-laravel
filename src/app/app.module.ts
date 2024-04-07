import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Auth/register/register.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CreateDepartementComponent } from './Departement/create-departement/create-departement.component';
import { ListeDepartementComponent } from './Departement/liste-departement/liste-departement.component';
import { FormsModule } from '@angular/forms';
import { EditDepartementComponent } from './Departement/edit-departement/edit-departement.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponentComponent,
    CreateDepartementComponent,
    ListeDepartementComponent,
    EditDepartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

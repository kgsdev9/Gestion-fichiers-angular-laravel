import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { LoginComponent } from './Auth/login/login.component';
 import { RegisterComponent } from './Auth/register/register.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListeDepartementComponent } from './Departement/liste-departement/liste-departement.component';
import { CreateDepartementComponent } from './Departement/create-departement/create-departement.component';
const routes: Routes = [
  { path: '', component: HomeComponentComponent, },
   { path: 'login', component: LoginComponent, title:'Connexion' },
   { path: 'register', component: RegisterComponent , title:'Inscription'},
   { path: 'departement', component: ListeDepartementComponent , title:'Lise des departements'},
   { path: 'departement/create', component: CreateDepartementComponent , title:'Création d\'un  departements'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

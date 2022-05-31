import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {UploadComponent } from './upload/upload.component';
import {HomeComponent } from './home/home.component';
import {UserHomeComponent } from './userHome/userHome.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'upload', component: UploadComponent },
    { path: 'home', component: HomeComponent },
    { path: 'userHome', component: UserHomeComponent },
    { path: 'view', component: ViewComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


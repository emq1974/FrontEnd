import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [  { path: "", component: IndexComponent },             
{ path:"login", component: LoginComponent },
{ path:"registro", component: RegistroComponent },
{ path:"dashboard", component: DashboardComponent },
{ path: "**", component: ErrorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

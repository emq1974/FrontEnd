import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RegistroComponent } from './registro/registro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { EducacionComponent } from './educacion/educacion.component';
import { EducdashboardComponent } from './dashboard/educdashboard/educdashboard.component';
import { ProyectdashboardComponent } from './dashboard/proyectdashboard/proyectdashboard.component';
import { HabilidadashboardComponent } from './dashboard/habilidadashboard/habilidadashboard.component';
import { ExperiendashboardComponent } from './dashboard/experiendashboard/experiendashboard.component';
import { PresentdashboardComponent } from './dashboard/presentdashboard/presentdashboard.component';
import { BannerdashboardComponent } from './dashboard/bannerdashboard/bannerdashboard.component';
import { RedesdashboardComponent } from './dashboard/redesdashboard/redesdashboard.component';
import  {  NgCircleProgressModule  }  from  'ng-circle-progress';
import { HysComponent } from './component/hys/hys.component' ;

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        NavBarComponent,
        BannerComponent,
        LoginComponent,
        ErrorComponent,
        RegistroComponent,
        DashboardComponent,
        PresentacionComponent,
        ExperienciaComponent,
        ProyectosComponent,
        FooterComponent,
        EducacionComponent,
        EducdashboardComponent,
        ProyectdashboardComponent,
        HabilidadashboardComponent,
        ExperiendashboardComponent,
        PresentdashboardComponent,
        BannerdashboardComponent,
        RedesdashboardComponent,
        HysComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgCircleProgressModule . forRoot ({})
    ]
})
export class AppModule { }

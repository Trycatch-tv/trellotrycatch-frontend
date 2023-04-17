import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkAccordionModule} from '@angular/cdk/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnComponent } from './components/btn/btn.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    ProjectsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    FontAwesomeModule,
    CdkAccordionModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

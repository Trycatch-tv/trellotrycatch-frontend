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
import { TaskComponent } from './pages/task/task.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DialogModule} from '@angular/cdk/dialog';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TodoDialogComponent } from './components/todo-dialog/todo-dialog.component';
import { MeService } from '../app/services/me.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CardColorComponent } from './components/card-color/card-color.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    ProjectsComponent,
    NavbarComponent,
    TaskComponent,
    SidebarComponent,
    TodoDialogComponent,
    CardColorComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    FontAwesomeModule,
    CdkAccordionModule,
    DragDropModule,
    DialogModule,
    HttpClientModule,
    
  ],
  exports:[CardColorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

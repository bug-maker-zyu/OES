import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {  FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NetService } from './net.service';
import { UserPageComponent } from './user-page/user-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MiddlePageComponent } from './middle-page/middle-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserPageComponent,
    TeacherPageComponent,
    AdminPageComponent,
    MiddlePageComponent,
    QuizPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    NetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

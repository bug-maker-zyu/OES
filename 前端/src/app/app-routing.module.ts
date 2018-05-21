import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MiddlePageComponent } from './middle-page/middle-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'user', component: UserPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'teacher', component: TeacherPageComponent},
  {path: 'admin', component: AdminPageComponent},
  {path: 'middle', component: MiddlePageComponent},
  {path: 'quiz', component: QuizPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

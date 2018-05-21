import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { User } from '../user';
import { Student } from '../student';
import { NetService } from '../net.service';
import { Clazz } from '../clazz';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: Student;
  clazzSet: Clazz[];
  sId: string;

  constructor(private app: AppComponent, private router: Router, private net: NetService) { }

  ngOnInit() {
    this.isLogIn();
    this.user = this.app.user;
    this.sId = this.user.login_id;
    this.app.num = 10;
    this.net.getAllClazz().subscribe(data => {
      this.clazzSet = data;
    });
  }

  logout() {
    this.app.user = undefined;
    this.router.navigate(['/login']);
  }

  isLogIn() {
    if (this.app.user === undefined) {
      alert('你还未登陆，请返回登陆');
      this.router.navigate(['/login']);
    }
  }

  startQuiz() {
    this.router.navigate(['quiz']);
  }

  update() {
    this.net.updateStudent(this.user).subscribe();
    this.net.getStudentById(this.user.login_id).subscribe(data => {
      this.user = data;
      this.app.user = data;
    });
  }

  undo() {
    this.net.getStudentById(this.sId).subscribe(data => {
      this.user = data;
      this.app.user = data;
    });
  }
}

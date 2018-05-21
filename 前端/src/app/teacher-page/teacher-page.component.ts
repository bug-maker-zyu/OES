import { Component, OnInit } from '@angular/core';
import { NetService } from '../net.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { Teacher } from '../teacher';
import { Clazz } from '../clazz';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {

  constructor(private net: NetService, private app: AppComponent, private router: Router) { }

  user: Teacher;
  clazzSet: Clazz[];
  sClazz: Clazz;
  sId: string;

  ngOnInit() {
    this.isLogIn();
    this.user = this.app.user;
    this.sId = this.app.user.login_id;
    this.initObj();
    this.net.getClazzByTeacher(this.user.name).subscribe(data => {
      this.clazzSet = data;
    });
  }

  initObj() {
    this.sClazz = {
      id: 0,
      c_name: '',
      t_name: this.user.id.toString()
    };
  }

  isLogIn() {
    if (this.app.user === undefined) {
      alert('你还未登陆，请返回登陆');
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.app.user = undefined;
    this.router.navigate(['/login']);
  }

  selectClazz(s: Clazz) {
    this.initObj();
    this.sClazz = s;
  }

  update() {
    this.net.updateTeacher(this.user).subscribe();
    this.net.getTeacherById(this.user.login_id).subscribe(data => {
      this.app.user = data;
      this.user = data;
    });
  }

  undo() {
    this.net.getTeacherById(this.sId).subscribe(data => {
      this.app.user = data;
      this.user = data;
    });
  }

  createClazz() {
    this.net.createClazz(this.sClazz).subscribe();
    this.router.navigate(['/middle']);
  }

  deleteClazz() {
    this.net.deleteClazz(this.sClazz.id).subscribe(data => {
      if (data === true) {
        this.router.navigate(['/middle']);
      } else {
        alert('当前班级存在学生，请先安排学生到其他班级，或删除学生，再删除班级');
      }
    });
  }

  updateClazz() {
    this.net.updateClazz(this.sClazz).subscribe();
    this.router.navigate(['/middle']);
  }

}

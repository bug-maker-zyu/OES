import { Component } from '@angular/core';
import { NetService } from './net.service';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { Direct } from 'protractor/built/driverProviders';
import { Router } from '@angular/router';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user;
  num: number;

  constructor(private net: NetService, private r: Router) {}

  login(l: User) {
    this.net.login(l).subscribe(data => {
      this.isSuccess(data, l.type);
    });
  }

  isSuccess(data , type: string) {
    if (data == null) {
      this.user = undefined;
      alert('登录失败，请检查登录账号或者密码是否正确');
    } else {
      this.user = data;
      if (type === '1') {
        this.r.navigate(['/user']);
      } else if (type === '2') {
        this.r.navigate(['/teacher']);
      } else {
        this.r.navigate(['/admin']);
      }
    }
  }

  register(s: Student) {
    this.net.register(s).subscribe(data => {
      if (data == null) {
        alert('注册失败，登录账号重复');
      } else {
        this.user = data;
        alert('注册成功，请返回登陆');
      }
    });
  }

}

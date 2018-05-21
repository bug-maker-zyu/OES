import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { User } from '../user';
import { Clazz } from '../clazz';
import { NetService } from '../net.service';
import { Student } from '../student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pic1: string;
  pic2: string;
  clazzSet: Clazz[];
  l: User;
  rStudent: Student;

  constructor(private app: AppComponent, private net: NetService) { }

  ngOnInit() {
    this.pic1 = 'assets/img/img.png';
    this.pic2 = 'assets/img/login_logo.png';
    this.net.getAllClazz().subscribe(data => {
      this.clazzSet = data;
    });
    this.l = {
      name: '',
      login_id: '',
      password: '',
      type: '1'
    };
    this.rStudent = {
      id: 0,
      name: '',
      sex: '',
      clazz: '',
      login_id: '',
      password: ''
    };
  }

  login() {
    this.app.login(this.l);
  }

  register() {
    this.app.register(this.rStudent);
  }


}

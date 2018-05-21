import { Component, OnInit } from '@angular/core';
import { NetService } from '../net.service';
import { Teacher } from '../teacher';
import { Student } from '../student';
import { Clazz } from '../clazz';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { Question } from '../question';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {


  teacherSet: Teacher[];
  studentSet: Student[];
  clazzSet: Clazz[];

  sTeacher: Teacher;
  sStudent: Student;
  sClazz: Clazz;
  sQuestion: Question;
  sLogin_id: string;
  sType: number;
  sQId: number;
  QA = '';
  QB = '';
  QC = '';
  QD = '';

  constructor(private net: NetService, private app: AppComponent, private router: Router) { }

  ngOnInit() {
    this.isLogIn();
    this.init();
  }

  selectStudent(s: Student) {
    this.sStudent = s;
    this.sType = 1;
    this.sLogin_id = s.login_id;
  }

  selectTeacher(s: Teacher) {
    this.sTeacher = s;
    this.sType = 2;
    this.sLogin_id = s.login_id;
  }

  selectClazz(s: Clazz) {
    this.sClazz = s;
    this.sType = 3;
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

  updateTeacher() {
    this.net.updateTeacher(this.sTeacher).subscribe();
  }

  createTeacher() {
    this.net.createTeacher(this.sTeacher).subscribe();
    this.router.navigate(['/middle']);
  }

  delete() {
    this.net.deleteUser(this.sLogin_id, this.sType).subscribe(data => {
      if (data === true) {
        this.router.navigate(['/middle']);
      } else {
        alert('无法删除当前用户');
      }
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

  createStudent() {
    this.net.register(this.sStudent).subscribe();
    this.router.navigate(['/middle']);
  }

  updateStudent() {
    this.net.updateStudent(this.sStudent).subscribe();
    this.router.navigate(['/middle']);
  }

  SQA() {
    if (this.QA === '' ) {
      this.QA = '\'A\'';
    } else {
      this.QA = '';
    }
  }
  SQB() {
    if (this.QB === '' ) {
      this.QB = '\'B\'';
    } else {
      this.QB = '';
    }
  }
  SQC() {
    if (this.QC === '' ) {
      this.QC = '\'C\'';
    } else {
      this.QC = '';
    }
  }
  SQD() {
    if (this.QD === '' ) {
      this.QD = '\'D\'';
    } else {
      this.QD = '';
    }
  }

  getAns() {
    this.sQuestion.ans = '[';
    let flag = false;
    if (!(this.QA === '')) {
      this.sQuestion.ans += this.QA;
      flag = true;
    }
    if (!(this.QB === '')) {
      if (flag === true) {
        this.sQuestion.ans += ',' + this.QB;
      } else {
        this.sQuestion.ans += this.QB;
        flag = true;
      }
    }
    if (!(this.QC === '')) {
      if (flag === true) {
        this.sQuestion.ans += ',' + this.QC;
      } else {
        this.sQuestion.ans += this.QC;
        flag = true;
      }
    }
    if (!(this.QD === '')) {
      if (flag === true) {
        this.sQuestion.ans += ',' + this.QD;
      } else {
        this.sQuestion.ans += this.QD;
        flag = true;
      }
    }
    this.sQuestion.ans += ']';
  }

  insertQuestion() {
    this.getAns();
    console.log(this.sQuestion);
    this.net.insertQuestion(this.sQuestion);
  }

  updateQuestion() {
    this.getAns();
    this.net.updateQuestion(this.sQuestion).subscribe();
  }

  deleteQuestion() {
    this.net.deleteQuestion(this.sQId).subscribe(data => {
      if (data = false) {
        alert('题目不存在');
      }
    });
  }

  getQuestionByid() {
    this.net.getQuestion(this.sQId).subscribe(data => {
      if (data === null) {
        alert('题目不存在');
      } else {
        this.sQuestion = data;
      }
    });
  }

  init() {
    this.net.getAllTeacher().subscribe(data => {
      this.teacherSet = data;
    });
    this.net.getAllStudent().subscribe(data => {
      this.studentSet = data;
    });
    this.net.getAllClazz().subscribe(data => {
      this.clazzSet = data;
    });
    this.initObj();
  }

  initObj() {
    this.sTeacher = {
      id: 0,
      name: '',
      password: '',
      sex: '男',
      login_id: '',
    };
    this.sClazz = {
      id: 0,
      t_name: '',
      c_name: ''
    };
    this.sStudent = {
      id: 0,
      name: '',
      sex: '男',
      clazz: '',
      login_id: '',
      password: ''
    };
    this.sQuestion = {
      id: 0,
      title: '',
      a: '',
      b: '',
      c: '',
      d: '',
      type: 1,
      ans: ''
    };
    this.sQId = 1;
  }
}

import { Component, OnInit } from '@angular/core';
import { UserPageComponent } from '../user-page/user-page.component';
import { AppComponent } from '../app.component';
import { Question } from '../question';
import { NetService } from '../net.service';
import { Answer } from '../answer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  constructor(private app: AppComponent, private net: NetService, private router: Router) { }
  num: number;
  questionSet: Question[];
  index: number;
  sQuestion: Question;
  ans: Answer[];
  sAns: string;
  QA: string;
  QB: string;
  QC: string;
  QD: string;
  btn: string;
  score: number;

  ngOnInit() {
    this.num = this.app.num;
    this.btn = '下一题';
    this.QA = '';
    this.QB = '';
    this.QC = '';
    this.QD = '';
    this.net.getQuestion2(this.num).subscribe(data => {
      this.questionSet = data;
      this.index = 0;
      this.sQuestion = this.questionSet[this.index];
    });
    this.net.getAns(this.num).subscribe(data => {
      this.ans = data;
    });
  }

  SQA() {
    if (this.QA === '') {
      this.QA = '\'A\'';
    } else {
      this.QA = '';
    }
  }
  SQB() {
    if (this.QB === '') {
      this.QB = '\'B\'';
    } else {
      this.QB = '';
    }
  }
  SQC() {
    if (this.QC === '') {
      this.QC = '\'C\'';
    } else {
      this.QC = '';
    }
  }
  SQD() {
    if (this.QD === '') {
      this.QD = '\'D\'';
    } else {
      this.QD = '';
    }
  }

  getAns() {
    this.sAns = '[';
    let flag = false;
    if (!(this.QA === '')) {
      this.sAns += this.QA;
      flag = true;
    }
    if (!(this.QB === '')) {
      if (flag === true) {
        this.sAns += ',' + this.QB;
      } else {
        this.sAns += this.QB;
        flag = true;
      }
    }
    if (!(this.QC === '')) {
      if (flag === true) {
        this.sAns += ',' + this.QC;
      } else {
        this.sAns += this.QC;
        flag = true;
      }
    }
    if (!(this.QD === '')) {
      if (flag === true) {
        this.sAns += ',' + this.QD;
      } else {
        this.sAns += this.QD;
        flag = true;
      }
    }
    this.sAns += ']';
  }

  nextQuestion() {
    if (this.index < this.num) {
      this.getAns();
      this.ans[this.index] = {
        question_id: this.sQuestion.id,
        ans: this.sAns
      };
      this.index++;
      if (this.index === (this.num - 1)) {
        this.btn = '提交';
      } else {
        this.sQuestion = this.questionSet[this.index];
      }
    } else {
      this.getScore();
    }
  }

  getScore() {
    this.score = 0;
    const t = 100.0 / this.num;
    for (let index = 0; index < this.ans.length; index++) {
      const element = this.ans[index];
      this.net.getScore(element).subscribe(data => {
        if (data === true) {
          this.score += t;
        }
        if (index === (this.num - 1)) {
          alert(this.score);
          this.router.navigate(['user']);
        }
      });
    }
  }
}

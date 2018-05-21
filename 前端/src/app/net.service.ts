import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { Clazz } from './clazz';
import { Teacher } from './teacher';
import { Student } from './student';
import { log } from 'util';
import { catchError, map, tap } from 'rxjs/operators';
import { Question } from './question';
import { Answer } from './answer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NetService {

  constructor(private http: HttpClient) { }


  // 用户操作
  login(l: User): Observable<any> {
    return this.http.post('//localhost:8080/login', l);
  }

  deleteUser(login_id: string, type: number): Observable<any> {
    return this.http.get('//localhost:8080/deleteUser?login_id=' + login_id + '&&type=' + type);
  }

  register(s: Student): Observable<any> {
    return this.http.post<Student>('//localhost:8080/createStudent', s);
  }

  getAllStudent(): Observable<any> {
    return this.http.get<Student[]>('//localhost:8080/getAllStudent');
  }

  createTeacher(t: Teacher): Observable<any> {
    return this.http.post('//localhost:8080/createTeacher', t);
  }

  updateTeacher(teacher: Teacher): Observable<any> {
    return this.http.post<Teacher>('//localhost:8080/updateTeacher', teacher);
  }

  updateStudent(student: Student): Observable<any> {
    return this.http.post<Student>('//localhost:8080/updateStudent', student);
  }

  getAllTeacher(): Observable<any> {
    return this.http.get<Teacher[]>('//localhost:8080/getAllTeacher');
  }

  getStudentById(login_id: string): Observable<any> {
    return this.http.get('//localhost:8080/getStudentById?login_id=' + login_id);
  }

  // 班级操作
  getAllClazz(): Observable<any> {
    return this.http.get<Clazz[]>('//localhost:8080/getAllClazz');
  }

  createClazz(c: Clazz): Observable<any> {
    return this.http.post('//localhost:8080/createClazz', c);
  }

  deleteClazz(id: number): Observable<any> {
    return this.http.get('//localhost:8080/deleteClazz?id=' + id);
  }

  updateClazz(c: Clazz): Observable<any> {
    return this.http.post('//localhost:8080/updateClazz', c);
  }

  getClazzByTeacher(t_name: string): Observable<any> {
    return this.http.get('//localhost:8080/getClazzByTeacher?t_name=' + t_name);
  }

  getTeacherById(login_id: string): Observable<any> {
    return this.http.get('//localhost:8080/getTeacherById?login_id=' + login_id);
  }
  // 题目操作
  getAllQuestion(): Observable<any> {
    return this.http.get('//localhost:8080/getQuestion');
  }

  insertQuestion(q: Question) {
    this.http.post('//localhost:8080/insertQuestion', q).subscribe();
  }

  deleteQuestion(id: number): Observable<any> {
    return this.http.get<boolean>('//localhost:8080/deleteQuestion?id=' + id);
  }

  updateQuestion(q: Question): Observable<any> {
    return this.http.post<boolean>('//localhost:8080/updateQuestion', q);
  }

  getQuestion(id: number): Observable<any> {
    return this.http.get<Question>('//localhost:8080/getQuestionById?id=' + id);
  }

  getQuestion2(num: number): Observable<any> {
    return this.http.get<Question>('//localhost:8080/getQuestion2?num=' + num);
  }

  getAns(num: number): Observable<any> {
    return this.http.get<Answer[]>('//localhost:8080/getAnswer?num=' + num);
  }

  getScore(answer: Answer): Observable<any> {
    return this.http.get<boolean>('//localhost:8080/getScore?question_id=' + answer.question_id + '&&ans=' + answer.ans);
  }
}

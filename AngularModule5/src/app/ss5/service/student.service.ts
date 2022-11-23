import { Injectable } from '@angular/core';
import {Student} from '../model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // tslint:disable-next-line:variable-name
  private _student: Student;
  // tslint:disable-next-line:variable-name
  private _students: Student[] = [
    {name: 'Nguyen Van A', gender: 1, point: 100},
    {name: 'Nguyen Van B', gender: 2, point: 75},
    {name: 'Nguyen Van C', gender: 0, point: 50},
    {name: 'Nguyen Van C', gender: 1, point: 25},
  ];

  get students(): Student[] {
    return this._students;
  }

  set students(value: Student[]) {
    this._students = value;
  }

  constructor() { }

  save(student: Student) {
    this._students.unshift(student);
  }

  get student(): Student {
    return this._student;
  }

  setStudent(value: Student) {
    this._student = value;
  }

  remove(student: Student) {
    console.log('vo day');
    const index: number = this._students.indexOf(student);
    this._students.splice(index, 1);
  }
}

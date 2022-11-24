import { Component, OnInit } from '@angular/core';
import {Student} from '../model/Student';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  count = 1;
  studentDelete: any;
  students: Student[];
  // tslint:disable-next-line:variable-name
  constructor(private _StudentService: StudentService) { }

  ngOnInit(): void {
    this.students = this._StudentService.students;
  }

  showDetail(student: Student) {
    this._StudentService.setStudent(student);
    console.log(this._StudentService.student);
  }

  cofirmRemove(student: Student) {
    this.studentDelete = student;
  }
  removeStudent(student: Student) {
    this._StudentService.remove(student);
  }

}

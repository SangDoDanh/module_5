import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../model/Student';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  student: Student;

  // tslint:disable-next-line:variable-name
  constructor(public _studentService: StudentService) {
  }

  ngOnInit(): void {
    this.student = this._studentService.student;
  }

  createStudent(nameStudent: string, male: HTMLInputElement, female: HTMLInputElement, lgbt: HTMLInputElement, point: string) {

    let gender: string;
    if (female.checked) {
      gender = female.value;
    } else if (male.checked) {
     gender = male.value;
    } else {
      gender = lgbt.value;
    }
    const student: Student = {name: nameStudent, gender: parseInt(gender, 8), point: parseFloat(point)};
    this._studentService.save(student);
  }
}

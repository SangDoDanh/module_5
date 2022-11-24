import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../model/Student';
import {StudentService} from '../service/student.service';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  student: Student;
  studentForm: FormGroup;
  check: true;
  // tslint:disable-next-line:variable-name
  constructor(public _studentService: StudentService, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.student = this._studentService.student;
    this.studentForm = this._formBuilder.group({
      name: ['No name', Validators.required],
      point: [50, [Validators.min(0), Validators.max(100), Validators.required]],
      password: [],
      gender: [1],
      confPassword: [],
    }, {validators: reConfirmPass});
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

  createStudent1(studentForm: FormGroup) {
    console.log(studentForm.value);
    this._studentService.save({
      name: studentForm.value.name,
      point: studentForm.value.point,
      gender: studentForm.value.gender
    });
  }
}
export const reConfirmPass: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const passWord = control.get('password');
  const confPassword = control.get('confPassword');
  if (passWord && confPassword && passWord.touched && passWord.value !== confPassword.value) {
    return {reConfirmPassWord: true};
  }
  return null;
};


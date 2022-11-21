import { Component, OnInit } from '@angular/core';
import {removeSummaryDuplicates} from '@angular/compiler';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  fontSize = 14;
  numberTwo = '';
  numberOne = '';
  result = '';
  constructor() { }
  ngOnInit(): void {
  }
  check(numberOne: string, numberTow: string): boolean {
    return isNaN(parseFloat(numberOne)) === false && isNaN(parseFloat(numberTow)) === false;
  }

  sum() {
    if (this.check(this.numberOne, this.numberTwo)) {
      this.result = parseFloat(this.numberOne) + parseFloat(this.numberTwo) + '';
    } else {
      this.result = 'Number of valid';
    }
  }

  minus() {
    if (this.check(this.numberOne, this.numberTwo)) {
      this.result = parseFloat(this.numberOne) - parseFloat(this.numberTwo) + '';
    } else {
      this.result = 'Number of valid';
    }
  }

  multi() {
    if (this.check(this.numberOne, this.numberTwo)) {
      this.result = parseFloat(this.numberOne) * parseFloat(this.numberTwo) + '';
    } else {
      this.result = 'Number of valid';
    }
  }
  division() {
    if (this.check(this.numberOne, this.numberTwo)) {
      if (this.numberTwo === '0') {
        this.result = 'Number tow is not "0"';
      } else {
        this.result = parseFloat(this.numberOne) / parseFloat(this.numberTwo) + '';
      }
    } else {
      this.result = 'Number of valid';
    }
  }

  changeFontSize(e) {
    this.fontSize = e.target.value;
  }
}

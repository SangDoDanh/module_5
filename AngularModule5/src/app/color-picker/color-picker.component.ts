import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  backgroundColor = 'rgb(0, 0, 0)';
  redValue = 0;
  greenValue = 0;
  blueValue = 0;
  hexColor = this.rgbToHex(this.redValue, this.greenValue, this.blueValue);
  constructor() { }
  setColor() {
    this.backgroundColor = 'rgb(' + this.redValue + ',' + this.greenValue + ',' + this.blueValue + ')';
    console.log(this.backgroundColor);
    this.hexColor = this.rgbToHex(this.redValue, this.greenValue, this.blueValue);
  }
  ngOnInit(): void {
  }
  componentToHex(c) {
    const hex: any = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  rgbToHex(r, g, b) {
    return '#' + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }
}

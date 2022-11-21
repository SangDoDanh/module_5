import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule} from '@angular/forms';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { HeaderComponent } from './case-study/header/header.component';
import { FooterComponent } from './case-study/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickerComponent,
    CaseStudyComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

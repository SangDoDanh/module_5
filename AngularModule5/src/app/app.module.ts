import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule} from '@angular/forms';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FacilityComponent} from './facility/facility.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AddFacilityComponent } from './add-facility/add-facility.component';
import { ArticleComponent } from './article/article.component';
import { LikeComponent } from './like/like.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditFacilityComponent } from './edit-facility/edit-facility.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorPickerComponent,
    HeaderComponent,
    FooterComponent,
    FacilityComponent,
    AddFacilityComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    EditFacilityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { ParentComponent } from './ss5/parent/parent.component';
import { ChildComponent } from './ss5/child/child.component';
import { RatingComponent } from './ss6/rating/rating.component';
import { CountdownTimerComponent } from './ss6/countdown-timer/countdown-timer.component';
import { CustomerComponent } from './customer/customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { ContractComponent } from './contract/contract.component';
import { SignInComponent } from './ss7/sign-in/sign-in.component';
import { RegisterComponent } from './ss7/register/register.component';
import { DictionaryComponent } from './ss8/dictionary/dictionary.component';
import { DictionaryDetailComponent } from './ss8/dictionary-detail/dictionary-detail.component';
import {AngularRoutingModule} from './angular-routing.module';
import {RouterModule} from '@angular/router';
import { ProductComponent } from './ss8/product-manager/product/product.component';
import { ProductDetailComponent } from './ss8/product-manager/product-detail/product-detail.component';
import { ProductEditComponent } from './ss8/product-manager/product-edit/product-edit.component';
import { ProductDeleteComponent } from './ss8/product-manager/product-delete/product-delete.component';
import { ProductHeaderComponent } from './ss8/product-manager/product-header/product-header.component';


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
    EditFacilityComponent,
    ParentComponent,
    ChildComponent,
    RatingComponent,
    CountdownTimerComponent,
    CustomerComponent,
    EditCustomerComponent,
    AddCustomerComponent,
    AddContractComponent,
    ContractComponent,
    SignInComponent,
    RegisterComponent,
    DictionaryComponent,
    DictionaryDetailComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    ProductHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AngularRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

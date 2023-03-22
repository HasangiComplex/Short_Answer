import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { BodyTopComponent } from './body-top/body-top.component';
import { ValidationsComponent } from './validations/validations.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import { NumberValidationComponent } from './validations/number-validation/number-validation.component';
import { TextValidationComponent } from './validations/text-validation/text-validation.component';
import { LengthValidationComponent } from './validations/length-validation/length-validation.component';
import { IsStringValidationComponent } from './validations/text-validation/is-string-validation/is-string-validation.component';
import { IsTextValidationComponent } from './validations/text-validation/is-text-validation/is-text-validation.component';

import { EmailValidationComponent } from './validations/text-validation/email-validation/email-validation.component';
import { UrlValidationComponent } from './validations/text-validation/url-validation/url-validation.component';
import { PrefixValidationComponent } from './validations/text-validation/prefix-validation/prefix-validation.component';
import { SuffixValidationComponent } from './validations/text-validation/suffix-validation/suffix-validation.component';
import { DoesntContainValidationComponent } from './validations/text-validation/doesnt-contain-validation/doesnt-contain-validation.component';


import { IsNumberValidationComponent } from './validations/number-validation/is-number-validation/is-number-validation.component';
import { WholeNumberValidationComponent } from './validations/number-validation/whole-number-validation/whole-number-validation.component';
import { WithTwoDecimalsValidationComponent } from './validations/number-validation/with-two-decimals-validation/with-two-decimals-validation.component';
import { GreaterThanValidationComponent } from './validations/number-validation/greater-than-validation/greater-than-validation.component';
import { GreaterOrEqualValidationComponent } from './validations/number-validation/greater-or-equal-validation/greater-or-equal-validation.component';
import { LessThanValidationComponent } from './validations/number-validation/less-than-validation/less-than-validation.component';
import { LessThanEqualValidationComponent } from './validations/number-validation/less-than-equal-validation/less-than-equal-validation.component';
import { EqualToValidationComponent } from './validations/number-validation/equal-to-validation/equal-to-validation.component';
import { NotEqualToValidationComponent } from './validations/number-validation/not-equal-to-validation/not-equal-to-validation.component';
import { BetweenValidationComponent } from './validations/number-validation/between-validation/between-validation.component';
import { NotBetweenValidationComponent } from './validations/number-validation/not-between-validation/not-between-validation.component';
import { MinLengthValidationComponent } from './validations/length-validation/min-length-validation/min-length-validation.component';
import { MaxLengthValidationComponent } from './validations/length-validation/max-length-validation/max-length-validation.component';
import { BetweenLengthValidationComponent } from './validations/length-validation/between-length-validation/between-length-validation.component';

import { ValidationBodyComponent } from './validation-body/validation-body.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopupModalComponent,
    BodyTopComponent,
    ValidationsComponent,
    NumberValidationComponent,
    TextValidationComponent,
    LengthValidationComponent,
    IsStringValidationComponent,
    IsTextValidationComponent,

    EmailValidationComponent,
    UrlValidationComponent,
    PrefixValidationComponent,
    SuffixValidationComponent,
    DoesntContainValidationComponent,

    IsNumberValidationComponent,
    WholeNumberValidationComponent,
    WithTwoDecimalsValidationComponent,
    GreaterThanValidationComponent,
    GreaterOrEqualValidationComponent,
    LessThanValidationComponent,
    LessThanEqualValidationComponent,
    EqualToValidationComponent,
    NotEqualToValidationComponent,
    BetweenValidationComponent,
    NotBetweenValidationComponent,
    MinLengthValidationComponent,
    MaxLengthValidationComponent,
    BetweenLengthValidationComponent,

    ValidationBodyComponent,
      MycomponentComponent,



  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

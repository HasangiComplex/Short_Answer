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
    LengthValidationComponent
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

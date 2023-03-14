import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopupModalComponent } from './popup-modal/popup-modal.component';
import { BodyTopComponent } from './body-top/body-top.component';
import { ValidationsComponent } from './validations/validations.component';
import {FormsModule} from "@angular/forms";
import { ValidationLongComponent } from './validation-long/validation-long.component';
import { ValidationRadioComponent } from './validation-radio/validation-radio.component';
import { ValidationCheckComponent } from './validation-check/validation-check.component';
import { ValidationDropdownComponent } from './validation-dropdown/validation-dropdown.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { ValidationDataComponent } from './validation-data/validation-data.component';
import { BodyTopNewComponent } from './body-top-new/body-top-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopupModalComponent,
    BodyTopComponent,
    ValidationsComponent,
    ValidationLongComponent,
    ValidationRadioComponent,
    ValidationCheckComponent,
    ValidationDropdownComponent,
    FileUploadComponent,

    ValidationDataComponent,
     BodyTopNewComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

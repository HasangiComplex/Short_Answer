import { Component } from '@angular/core';

@Component({
  selector: 'app-body-top-new',
  templateUrl: './body-top-new.component.html',
  styleUrls: ['./body-top-new.component.css']
})
export class BodyTopNewComponent {
  selectedOption: any = 'option1'; // Set the initial value to the value of the first option
  options = ['ValidationsComponent', 'ValidationLongComponent', 'ValidationRadioComponent','ValidationCheckComponent','ValidationDropdownComponent','FileUploadComponent'
  ,'ValidationDataComponent'];
}

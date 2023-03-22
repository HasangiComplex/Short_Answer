
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent {
  @Input() data: any;

  selectedOption2: any;
  constructor() {
    this.selectedOption2 = 'TextValidationComponent'; // Set the initial value of the selected option
  }


  fields: any[] = [];
  addField() {
    this.fields.push({});
  }
  removeField(field: any) {
    const index = this.fields.indexOf(field);
    if (index >= 0) {
      this.fields.splice(index, 1);

    }

  }



}

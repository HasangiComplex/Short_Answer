import { Component } from '@angular/core';
import {ValidationsComponent} from "../validations/validations.component";

@Component({
  selector: 'app-body-top',
  templateUrl: './body-top.component.html',
  styleUrls: ['./body-top.component.css']
})
export class BodyTopComponent {
  selectedOption: any;
  constructor() {
    this.selectedOption = 'ValidationsComponent'; // Set the initial value of the selected option
  }
}

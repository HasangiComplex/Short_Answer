import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.css']
})
export class PopupModalComponent {
  reactiveForms: FormGroup;
  ngOnInit(){
    this.reactiveForms = new FormGroup({

    })
  }

}

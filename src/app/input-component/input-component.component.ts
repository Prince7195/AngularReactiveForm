import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

import { InputTypes } from './inputTypes.model';
import { InputService } from './input.service';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  reactiveForm: FormGroup;
  inputTypeCollection: InputTypes[];

  constructor(public inputService:InputService) { } 

  ngOnInit() {
    this.inputTypeCollection = this.inputService.getInputTypes();
    this.reactiveForm = new FormGroup({
      "inputTypeSelect": new FormControl(null)
    });
  }

  onAddInput() {
    console.log("Selected Input Type: " + this.reactiveForm.value.inputTypeSelect);
  }

}

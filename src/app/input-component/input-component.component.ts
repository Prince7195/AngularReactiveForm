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
  selectedInputType: string = '';
  inputElementsCollection = new FormArray([]);
  generatedInputElements: number = 0;
  showSubmitBtn: boolean = false;

  constructor(public inputService:InputService) { } 

  ngOnInit() {
    this.inputTypeCollection = this.inputService.getInputTypes();
    this.inItForm();
  }

  private inItForm() {
    this.reactiveForm = new FormGroup({
      "inputTypeSelect": new FormControl('dropdown'),
      "inputElementsArray" : this.inputElementsCollection
    });
  }

  onAddInput() {
    this.selectedInputType = this.reactiveForm.value.inputTypeSelect;
    this.generatedInputElements = this.reactiveForm.value.inputElementsArray;
    if(this.selectedInputType !== 'dynamic' && this.selectedInputType !== 'dropdown'  && this.selectedInputType !== 'multi-dropdown') {
      console.log( this.reactiveForm );
      console.log( this.selectedInputType );
      this.inputElementsCollection.push(
        new FormGroup({
          "inputName": new FormControl(null)
        })
      );
    }
    if(this.generatedInputElements) {
      this.showSubmitBtn = true;
    }
  }

}

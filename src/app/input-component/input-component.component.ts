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
  showSubmitBtn: boolean = false;
  typeArr:Array<string> = [];
  dropdowns: InputTypes[] = [
    {type: 'data1', value: 'value1'},
    {type: 'data2', value: 'value2'},
    {type: 'data3', value: 'value3'}
  ];
  type: number;

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

  onFormSubmit() {    
    console.log( this.reactiveForm );
  }

  onAddInput() {
    this.selectedInputType = this.reactiveForm.value.inputTypeSelect;
   // this.reactiveForm.value.inputElementsArray;
    if(this.selectedInputType) {
      this.typeArr.push(this.selectedInputType)
      this.inputElementsCollection.push(
        new FormGroup({
          "inputName": new FormControl(null)
        })
      );
    }
    if(this.reactiveForm.value.inputElementsArray.length) {
      console.log( this.reactiveForm.value.inputElementsArray );
      this.showSubmitBtn = true;
    }
  }

  onRemoveElement(index) {
    (<FormArray>this.reactiveForm.get('inputElementsArray')).removeAt(index);
    this.typeArr.splice(index,1);
    if(this.reactiveForm.value.inputElementsArray.length === 0) {
      console.log( this.reactiveForm.value.inputElementsArray );
      this.showSubmitBtn = false;
    }
  }

}

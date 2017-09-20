import { Injectable } from '@angular/core';

import { InputTypes } from './inputTypes.model'; 

@Injectable()
export class InputService{
    private inputTypes: InputTypes[] = [
        new InputTypes('dropdown','dropdown'),
        new InputTypes('multi-dropdown','multi-dropdown'),
        new InputTypes('input-text','text'),
        new InputTypes('input-number','number'),
        new InputTypes('input-email','email'),
        new InputTypes('input-password','password'),
        new InputTypes('input-dynamic','dynamic')  
    ];

    getInputTypes = function() {
        return this.inputTypes.slice();
    }

}
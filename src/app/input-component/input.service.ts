import { Injectable } from '@angular/core';

import { InputTypes } from './inputTypes.model'; 

@Injectable()
export class InputService{
    private inputTypes: InputTypes[] = [
        new InputTypes('dropdown','dropdown'),
        new InputTypes('multi-dropdown','multi-dropdown'),
        new InputTypes('input-text','input-text'),
        new InputTypes('input-number','input-number'),
        new InputTypes('input-email','input-email'),
        new InputTypes('input-password','input-password'),
        new InputTypes('input-dynamic','input-dynamic')  
    ];

    getInputTypes = function() {
        return this.inputTypes.slice();
    }

}
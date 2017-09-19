import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputComponentComponent } from './input-component.component';
import { InputService } from './input.service';

@NgModule({
    declarations: [ 
        InputComponentComponent 
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports:[InputComponentComponent],
    providers: [InputService]
})

export class InputModule {

}
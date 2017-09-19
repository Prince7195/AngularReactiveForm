import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InputComponentComponent } from './input-component.component';
import { InputService } from './input.service';

@NgModule({
    declarations: [ 
        InputComponentComponent 
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[InputComponentComponent],
    providers: [InputService]
})

export class InputModule {

}
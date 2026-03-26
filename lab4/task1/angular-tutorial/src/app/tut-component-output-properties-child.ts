import {Component, output} from '@angular/core';

@Component({
    selector: 'app-child',
    styles: `
    .btn {
        padding: 5px;
    }
    `,
    template:   ` <button class="btn" (click)="addItem()"> Add Item </button> `,
})

export class Child {
    addItemEvent = output<string>();  //event 

    addItem(){
        this.addItemEvent.emit('🐢'); //event emits the data as turtle
    }
}
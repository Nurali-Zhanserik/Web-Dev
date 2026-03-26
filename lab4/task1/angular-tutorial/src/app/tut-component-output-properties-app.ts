import {Component}  from '@angular/core';
import {Child} from './tut-component-output-properties-child'; //imported file

@Component({
    selector: 'app-root',
    template: `
        <app-child (addItemEvent)="addItem($event)" />  
        <p>🐢 all the way down {{items.length}}</p>
    `,
    imports: [Child],
})

export class App {
    items = new Array();

    addItem(item: string){
        this.items.push(item);
    }
}

//(addItemEvent) = listen to child event 
// when child emits addItemEvent, call my function 
//&event = turtle emission
import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    @for (user of users; track user.id){
        <p> {{user.name}} </p>
    }
    `,
})

export class App {
    users = [
        {id: 0, name: "Sara"},
        {id: 1, name: "Amy"},
        {id: 2, name: "Rachel"},
        {id: 3, name: "Jessica"},
        {id: 4, name: "PoorArmstrong"},
    ];
}

//this should output a list of names of users
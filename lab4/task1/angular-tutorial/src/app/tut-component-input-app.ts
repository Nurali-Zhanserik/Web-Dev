import {Component} from '@angular/core';
import {User} from './tut-component-input-user';  // there is a file "tut-component-input-user" among the app files which we imported

@Component({
    selector: 'app-root',
    template: `<app-user name="Simran" />`,
    imports: [User],
})

export class App {}


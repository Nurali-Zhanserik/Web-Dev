import {Component} from '@angular/core';

@Component ({
    selector: 'app-root',
    template: `
        <section>
            there is a secret message for you, hover to reveal
            {{message}}
        </section>
    `,
})

export class App{
    message = '';

    showSecretMessage(){
        this.message = 'Way to go';
    }
}
import {Component} from '@angular/core';
import {Comments} from './tut_deferrable_comments';

@Component({
    selector: 'app-root',
    template: `
        <div>
            <h1>How I feel about Angular</h1>
            <article>
                <p>Something</p>
            </article>
            @defer(on viewport) {
                <comments />
            } @placeholder {
                <p>Fututre comments</p> 
            } @loading(minimum 2s){
                <p>Loading comments...</p> 
            }
        </div>
    `,
    imports: [Comments],
})

export class App {}
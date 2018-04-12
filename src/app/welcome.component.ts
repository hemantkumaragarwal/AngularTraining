import {Component} from '@angular/core';

@Component ({
    selector: 'welcome',
    template: '<h1>{{greeting}} {{name}}</h1>'
})

export class WelcomeComponent {
    private name: string = 'Javascript world';
    private greeting: string;
    constructor() {
        let date = new Date();
        if (date.getSeconds() % 2 === 0) {
            this.greeting = 'Hello';
        }else {
            this.greeting = 'bye';
        }
    }

}

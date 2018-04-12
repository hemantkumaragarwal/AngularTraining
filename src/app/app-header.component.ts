import {Component,Input} from '@angular/core';

@Component ({
    selector: 'app-header',
    template: '<h1>{{siteTitle}}</h1>',
    styles: [
        `
        h1 {
            text-color: gray;
            text-align: center
        }
        `
    ]
})

export class AppHeaderComponent {
    @Input() siteTitle: string = 'Title';
}

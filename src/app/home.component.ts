import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
                <app-header siteTitle = 'wonderful title using input decorator'></app-header>
                <welcome></welcome>`
})
export class HomeComponent {

}
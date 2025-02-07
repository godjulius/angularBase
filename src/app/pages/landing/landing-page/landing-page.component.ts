import {Component} from '@angular/core';
import {BaseComponent} from '../../../core/base.component';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css'
})
export class LandingPageComponent extends BaseComponent{
    constructor() {
        super();
        console.log('Landing page')
    }

}

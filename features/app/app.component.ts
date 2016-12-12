import { Component } from '@angular/core';

import { SharedService } from '../shared/SharedService';

@Component({
    selector: 'my-app',
    templateUrl: '/features/app/app.component.html'
})
export class AppRootComponent {
    greeting = 'App1: YoLO!';
    constructor(public greetingService: SharedService) {
        greetingService.greetingChanged.subscribe(str => this.greeting = str);
    }

    changeText() {
        this.greetingService.setGreeting('Whats up one?');
    }
}

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html'
})
export class AppRootComponent{
    greeting = 'Yo';
    changeText(){
        this.greeting = 'Whats up';
    }
}

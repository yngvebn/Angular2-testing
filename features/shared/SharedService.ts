import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SharedService {
    sharedGreeting: string;
    public greetingChanged = new Subject<string>()

    setGreeting(greeting: string) {
        this.sharedGreeting = "From shared: " + greeting;
        window.dispatchEvent(new CustomEvent('sharedGreeting', { detail: this.sharedGreeting }));

        this.greetingChanged.next(this.sharedGreeting);
    }

    getGreeting() {

        console.log('getGreeting, returning', this.sharedGreeting);
        return this.sharedGreeting;
    }
}
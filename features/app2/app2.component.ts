import { Component, OnInit,Input, ChangeDetectorRef,HostListener } from '@angular/core';
import { SharedService } from '../shared/SharedService';

@Component({
    selector: 'my-app2',
    templateUrl: '/features/app2/app2.component.html'
})
export class App2RootComponent implements OnInit {
    @Input() greeting = 'YoLO!';
    constructor(public greetingService: SharedService, private ref: ChangeDetectorRef) {

    }

    @HostListener('window:sharedGreeting', ['$event'])
    fromEvent($event){
        console.log('from event', $event);
    }
    
    ngOnInit() {
        this.greetingService.greetingChanged.subscribe(str => {

            this.greeting = str;
            console.log('greetingChanged.subscribe', this.greeting);
            this.ref.detectChanges();
        });
    }

    changeText() {
        this.greeting = this.greetingService.getGreeting();
    }
}

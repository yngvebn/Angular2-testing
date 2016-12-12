import {Injectable} from '@angular/core';

@Injectable()
export class GreetingService{
    greeting = "What";
    setGreeting(greeting: string){
        this.greeting = "From Service: "+greeting;
    }
}
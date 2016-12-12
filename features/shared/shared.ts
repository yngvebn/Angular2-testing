import { NgModule, FactoryProvider } from '@angular/core';
import { GreetingService } from './GreetingService';

import {SharedServiceFactory} from './SharedServiceFactory';
import {SharedService} from './SharedService';


const sharedServiceProvider: FactoryProvider = {provide: SharedService, useFactory: SharedServiceFactory, deps: []};

@NgModule({
    providers: [GreetingService,
        sharedServiceProvider
    ],
    exports: []
})
export class SharedModule { }
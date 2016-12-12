import { NgModule } from '@angular/core';
import { App2RootComponent} from './app2.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared';

@NgModule({
    declarations: [App2RootComponent],
    bootstrap: [App2RootComponent],
    imports: [BrowserModule, SharedModule],
    providers: []
})
export class App2Module{}
import { NgModule } from '@angular/core';
import { AppRootComponent} from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared';

@NgModule({
    declarations: [AppRootComponent],
    bootstrap: [AppRootComponent],
    imports: [BrowserModule, SharedModule]
})
export class AppModule{}
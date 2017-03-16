import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// NgModule is a "decorator", which post-processes the class.
// declarations registers an application's components, which must be done before using them.
// bootstrap tells Angular to start AppComponent at launch
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService, EntryCommentFormComponent } from './entries';
import { InMemoryEntryService } from './backend';

// NgModule is a "decorator", which post-processes the class.
// declarations registers an application's components, which must be done before using them.
// bootstrap tells Angular to start AppComponent at launch
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService),
        FormsModule
    ],
    providers: [EntryService],
    declarations: [
        AppComponent,
        EntryComponent,
        EntryListComponent,
        EntryCommentFormComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}
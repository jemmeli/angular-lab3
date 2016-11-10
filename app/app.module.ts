import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list.component';
//in order to register the service on entire app NgModule
//other option is to register the service on the component
import {PeopleService} from "./people.service";




@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent,PeopleListComponent],
    bootstrap:    [ AppComponent ],
    //register the service on entire app NgModule
    //other option is to register the service on the component
    //providers: [PeopleService]

    
})
export class AppModule { }
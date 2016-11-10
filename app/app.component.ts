import { Component } from '@angular/core';
//other option is to register the service on the component
import { PeopleService } from './people.service';
@Component({
    selector: 'my-app',
    template: `
    <h1> {{title}} </h1>
    <people-list></people-list>
    `,
    // HERE! This registers the PeopleService
    // now Angular 2 knows to inject it when required
    providers: [PeopleService]

    /*using interface*/
    // in the NGModule/AppComponent
    //providers: [provide("IPeopleService", {useClass: PeopleService}]
})
export class AppComponent {
    title: String = 'Liste des instructeurs!!!';
}
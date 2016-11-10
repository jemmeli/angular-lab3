import { Component } from '@angular/core';
import { Person } from './person';
// (1) import the service
import {PeopleService} from "./people.service";


@Component({
    selector: 'people-list',
    template: `
    <!-- this is the new syntax for ng-repeat -->
    <ul *ngFor="let person of people">
    <li>
    {{person.name}}
    </li>
    </ul>
    `
})

export class PeopleListComponent{
    //dont need data , we get them from people.services
    /*
    people: Person[] = [
        {name: 'Mohamed Zaibi', height: 185, weight: 70},
        {name: 'Ramy Ben Chaabene', height: 180, weight: 74},
        {name: 'Mohamed Romdhani', height: 170, weight: 74},
    ];
    */
    people:Person[] = [];
    // this shorthand syntax automatically creates and
    // initializes a new private member in the class
    /**/
    constructor(private _peopleService:PeopleService) {
        this.people = _peopleService.getAll();
    }


    // in the PeopleListComponent
    //constructor(@Inject("IPeopleService")private _peopleService : IPeopleService)


}
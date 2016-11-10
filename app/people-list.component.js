"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// (1) import the service
var people_service_1 = require("./people.service");
var PeopleListComponent = (function () {
    // this shorthand syntax automatically creates and
    // initializes a new private member in the class
    /**/
    function PeopleListComponent(_peopleService) {
        this._peopleService = _peopleService;
        //dont need data , we get them from people.services
        /*
        people: Person[] = [
            {name: 'Mohamed Zaibi', height: 185, weight: 70},
            {name: 'Ramy Ben Chaabene', height: 180, weight: 74},
            {name: 'Mohamed Romdhani', height: 170, weight: 74},
        ];
        */
        this.people = [];
        this.people = _peopleService.getAll();
    }
    PeopleListComponent = __decorate([
        core_1.Component({
            selector: 'people-list',
            template: "\n    <!-- this is the new syntax for ng-repeat -->\n    <ul *ngFor=\"let person of people\">\n    <li>\n    {{person.name}}\n    </li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [people_service_1.PeopleService])
    ], PeopleListComponent);
    return PeopleListComponent;
}());
exports.PeopleListComponent = PeopleListComponent;
//# sourceMappingURL=people-list.component.js.map
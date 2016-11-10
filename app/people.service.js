"use strict";
var PeopleService = (function () {
    function PeopleService() {
    }
    PeopleService.prototype.getAll = function () {
        return [
            { name: 'Mohamed Zaibi', height: 185, weight: 70 },
            { name: 'Ramy Ben Chaabene', height: 180, weight: 74 },
            { name: 'Mohamed Romdhani', height: 170, weight: 74 },
        ];
    };
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map
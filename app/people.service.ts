import { Person } from './person';
export class PeopleService{
    getAll() : Person[] {
        return [
            {name: 'Mohamed Zaibi', height: 185, weight: 70},
            {name: 'Ramy Ben Chaabene', height: 180, weight: 74},
            {name: 'Mohamed Romdhani', height: 170, weight: 74},
        ];
    }
}
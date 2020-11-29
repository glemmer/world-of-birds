import { ILocation } from 'src/app/interfaces/location/location.interface';

export class Location implements ILocation {
    id: number;
    name: string;
    latitude: number;
    longitude: number;

    constructor() {}
}

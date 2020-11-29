import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Location } from '../../classes/location/location.class';
import { LOCATIONS } from '../../mocks/mock-locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getLocations(): Observable<Location[]> {
    return of(LOCATIONS);
  }

  getMainLocation(): Location {
    const location: Location = {
        id: 1,
        name: 'Narangba',
        latitude: -27.2015,
        longitude: 152.9655
    };

    return location;
  }

  async getCurrentLocation(): Promise<Location> {
    return new Promise((resolve, reject) => {
    // tslint:disable-next-line:prefer-const
      let loc: Location = new Location();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
           console.log(`Current position ${position.coords.longitude}`);
           loc.id = 1;
           loc.name = 'Main';
           loc.latitude = position.coords.latitude;
           loc.longitude = position.coords.longitude;
           console.log(`Current position ${JSON.stringify(loc)}`);
           resolve(loc);
          });
      } else {
        reject(loc);
      }
    });
  }
}

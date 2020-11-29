import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../classes/location/location.class';
import { LocationService } from '../services/location/location.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  latitude = 0;
  longitude = 0;
  googleMapType = 'terrain';
  markers: marker[] = [
      {
        lat: -27.0010,
        lng: 152.9655,
        label: 'A',
        draggable: true
      },
      {
        lat: -27.2015,
        lng: 152.9655,
        label: 'B',
        draggable: true
      },
      {
        lat: -27.4000,
        lng: 152.9657,
        label: 'C',
        draggable: true
      }
  ];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getCurrentLocation()
    .then((loc) => {
        console.log(`Initial location ${loc}`);
        this.latitude = loc.latitude;
        this.longitude = loc.longitude;
    });
  }

  // tslint:disable-next-line:typedef
  addMarker($event: { coords: { lat: any; lng: any; }; }) {
    const newMarker: marker = {
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      label: 'N',
      draggable: false
    };

    this.markers.push(newMarker);
  }
}

// tslint:disable-next-line:class-name
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}


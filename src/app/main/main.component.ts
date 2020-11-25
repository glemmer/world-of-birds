import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{

  latitude = -27.2015;
  longitude = 152.9655;
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

  constructor() { }

  // tslint:disable-next-line:typedef
  addMarker($event: { coords: { lat: any; lng: any; }; }) {
//    console.log($event.coords.lat);
//    console.log($event.coords.lng);
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


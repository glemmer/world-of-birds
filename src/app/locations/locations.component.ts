import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: Location[];

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
  }

  getLocations(): void {
    this.locationService.getLocations();
  }

}

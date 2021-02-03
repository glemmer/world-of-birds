import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListBirdsService {

  listBirds = true;

  constructor() { }

  getListBirds(): Observable<boolean> {
    return of(this.listBirds);
  }

  setListBirds(listBirds: boolean): void {
      this.listBirds = listBirds;
  }

}

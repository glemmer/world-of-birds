import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn: boolean;

  constructor() { }

  getLoggedIn(): Observable<boolean> {
    return of(this.loggedIn);
  }

  setLoggedIn(loggedIn: boolean): void {
    this.loggedIn = loggedIn;
    console.log(`LoggedIn set to ${this.loggedIn}`);
  }

}

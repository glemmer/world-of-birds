import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  accessToken: string;

  constructor() { }

  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  getAccessToken(): Observable<string> {
    return of(this.accessToken);
  }
}

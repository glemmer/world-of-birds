import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = 'World of Birds Application';

  constructor() { }

  getMessage(): Observable<string> {
    return of(this.message);
  }

  setMessage(message: string): void {
    this.message = message;
  }

}

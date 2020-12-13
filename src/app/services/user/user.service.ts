import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User;

  constructor() { }

  getNewUser(): User {
    return {id: 0, firstname: '', lastname: '', email: '', password: ''};
  }

  getCurrentUser(): Observable<User> {
    return of(this.currentUser);
  }

  setCurrentUser(user: User): void {
    this.currentUser = user;
    console.log(`Current user ${JSON.stringify(this.currentUser)}`);
  }

}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUserId: number;
  currentUser: User;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getNewUser(): User {
    const roles = new Array<string>();
    return {id: 0, username: '', firstname: '', lastname: '', email: '', password: '', roles, accessToken: ''};
  }

  getCurrentUser(): Observable<User> {
    return of(this.currentUser);
  }

  loginUser(email: string, userPassword: string): Observable<User> {
    if (email === undefined) {
      email = '';
    }
    if (userPassword === undefined) {
      userPassword = '';
    }
    return this.http.post<User>('http://localhost:8080/wob/api/signin', {username: email, password: userPassword}, this.httpOptions)
          .pipe(
              tap(data => {
                  this.currentUser = this.getNewUser();
                  this.currentUser.firstname = data.firstname;
                  this.currentUser.lastname = data.lastname;
                  this.currentUser.email = data.email;
                  this.currentUser.username = data.username;
                  console.log(`User logged in -> ${JSON.stringify(data)}`);
                },
                  error => this.messageService.setMessage(`Error: ${error}`)
              )
          );
  }

  enroleUser(user: User): Observable<string> {
    return this.http.post<string> ('http://localhost:8080/wob/api/signup', user , this.httpOptions)
          .pipe(
              tap(data => console.log(`Returned string -> ${data}`),
                  error => this.messageService.setMessage(`Error: ${error}`)
              )
          );
  }

  loadUser(email: string, password: string): void {
    if (this.currentUser !== undefined) {
        this.currentUser = this.getNewUser();
        this.currentUser.email = email;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user.interface';
import { LoginService } from './services/login/login.service';
import { MessageService } from './services/message/message.service';
import { UserService } from './services/user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn = false;
  user: User;
  message: string;

  title = 'World Of Birds';

  constructor(private loginService: LoginService,
              private userService: UserService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getCurrentMessage();
  }

  onLogout(): void {
    console.log(`User ${this.user.firstname} logged out`);
    this.loginService.setLoggedIn(false);
  }

  getLoggedIn(): boolean {
    this.loginService.getLoggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
      if (loggedIn) {
        this.getCurrentUser();
      }
    });

    return this.loggedIn;
  }

  getCurrentUser(): void {
    this.userService.getCurrentUser().subscribe(currentUser => {
      this.user = currentUser;
    });
  }

  getCurrentMessage(): string {
    this.messageService.getMessage().subscribe(message => {
      this.message = message;
    });

    return this.message;
  }
}

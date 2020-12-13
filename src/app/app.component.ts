import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user.interface';
import { LoginService } from './services/login/login.service';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedIn: boolean;
  user: User;

  title = 'World Of Birds';

  constructor(private loginService: LoginService,
              private userService: UserService) {
    this.getLoggedIn();
  }

  ngOnInit(): void {
  }

  getLoggedIn(): boolean {
    this.loginService.getLoggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
      if (loggedIn) {
        this.getCurrentUser();
        console.log(`Current logged in user ${JSON.stringify(this.user)}`);
      } else {
        console.log('No current user set');
      }
    });

    return this.loggedIn;
  }

  getCurrentUser(): void {
    this.userService.getCurrentUser().subscribe(currentUser => {
      this.user = currentUser;
    });
  }
}

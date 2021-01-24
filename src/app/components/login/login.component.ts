import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message/message.service';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';
import { AccessService } from 'src/app/services/access/access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router,
              private messageService: MessageService,
              private loginService: LoginService,
              private userService: UserService,
              private accessService: AccessService) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log('On Login Click');

    this.userService.loginUser(this.username, this.password).subscribe({
      next: data => {
        console.log(`User -> ${JSON.stringify(data)}`);
        this.messageService.setMessage(`User ${this.username} logged in succesfully`);
        this.accessService.setAccessToken(data.accessToken);
        this.loginService.setLoggedIn(true);
        this.router.navigateByUrl('/birds');
      },
      error: error => {
        console.log(`Error message -> ${JSON.stringify(error)}`);
        if (error.status === 0) {
          this.messageService.setMessage(`Connection error: Cannot connect to backend`);
        } else {
          this.messageService.setMessage(`Authentication error: ${error.error.message}`);
        }
      }
    });

/*    this.userService.loginUser(this.username, this.password)
    .then(user => {
      console.log(`User -> ${JSON.stringify(user)}`);
      this.loginService.setLoggedIn(true);
      this.router.navigateByUrl('/birds');
    })
    .catch(err => {

    });  */
  }

}

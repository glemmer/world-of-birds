import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  email: string;
  firstname: string;
  lastname: string;
  password: string;
  confirmpwd: string;

  constructor(private router: Router,
              private userService: UserService,
              private loginService: LoginService) { }

  ngOnInit(): void {
  }

  passwordMatchError(): void {

  }

  populateNewUser(): void {
    const newUser: User = this.userService.getNewUser();
    if (this.password !== this.confirmpwd) {
       this.passwordMatchError();
    }

    newUser.email = this.email;
    newUser.firstname = this.firstname;
    newUser.lastname = this.lastname;
//    newUser.password = this.password;
    console.log(`New user information ${newUser}`);
    this.userService.setCurrentUser(newUser);
//    this.newUserRegistered.emit(newUser);
  }

  onRegister(): void {
    console.log('On Register Click');
    this.loginService.setLoggedIn(true);

    this.populateNewUser();

    this.router.navigateByUrl('/birds');
  }

}

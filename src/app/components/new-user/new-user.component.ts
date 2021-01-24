import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { MessageService } from 'src/app/services/message/message.service';
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
              private messageService: MessageService) { }

  ngOnInit(): void {
  }

  passwordMatchError(): void {

  }

  populateNewUser(): User {
    const newUser: User = this.userService.getNewUser();
    if (this.password !== this.confirmpwd) {
       this.passwordMatchError();
    }

    newUser.email = this.email;
    newUser.firstname = this.firstname;
    newUser.lastname = this.lastname;
    newUser.username = this.email;
    newUser.password = this.password;
    newUser.roles.push('user');
    return newUser;
  }

  onRegister(): void {
    this.userService.enroleUser(this.populateNewUser()).subscribe({
      next: data => {
        this.messageService.setMessage(`User ${this.email} registered succesfully`);
        this.router.navigateByUrl('/login');
      },
      error: error => {
        console.log(`Error message -> ${error.error.message}`);
        this.messageService.setMessage(error.error.message);
      }
    });
  }


}

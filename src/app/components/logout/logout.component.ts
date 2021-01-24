import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements AfterViewInit {

  constructor(private loginService: LoginService) { }

  ngAfterViewInit(): void
  {
  }

}

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login: string = "";
  public password: string = "";

  loginObject = {
    login: 'test',
    password: 'test',
  }

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  public loginFunction(): void {
    if (this.loginObject.login == this.login && this.loginObject.password == this.password) {
      localStorage.setItem('token', 'jsd72d8d8asks02i9u817y')
      this.login = '';
      this.password = '';
      this.router.navigate(['dashboard'])
    }
  }
}

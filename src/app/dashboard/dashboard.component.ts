import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public readonly navLinks: any[] = [];

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Workers',
        link: './workers',
      },
      {
        label: 'Storage',
        link: './storage',
      }
    ];
  }

  ngOnInit(): void {
  }

  public dashboard(): void {
    this.router.navigate(['dashboard']);
  }

  public logoutFunction() {
    localStorage.clear()
    this.router.navigate(['login']);
  }
}

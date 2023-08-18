import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  public loginStatus() {
    if (!sessionStorage.getItem('token')) {
      return true;
    }
    else {
      return false;
    }
  }

  public logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);

  }
}

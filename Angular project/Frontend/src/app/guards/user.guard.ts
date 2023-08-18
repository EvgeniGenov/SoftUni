import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
providedIn: 'root'
})

export class UserGuard implements CanActivate {
constructor(private router: Router, public jwtHelper: JwtHelperService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = sessionStorage.getItem('token');
    console.log(token)
    if (!token) {
      
      this.router.navigate(['login']);
      return false;
    }
    const isExpired = this.jwtHelper.isTokenExpired(token);

    if (isExpired) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
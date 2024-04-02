import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private router: Router, private authService : AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(["login-page"]);
      return false;
    }

    return this.authService.getAuthStatus();

    //   var isAuthenticated = this.authService.getAuthStatus();
    //   if (!isAuthenticated) {
    //       this.router.navigate(['login-page']);
    //   }
    // return isAuthenticated;
  }
  
}

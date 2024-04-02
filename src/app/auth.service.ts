import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
// import { LoginPageComponent } from './login-page/login-page.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;
  token : any;

  constructor( private http: HttpClient) { }

  getAuthStatus() {
    return !!localStorage.getItem('SessionUser');  
   
  }
  
  getToken(){
    return this.token;
  }

 
}

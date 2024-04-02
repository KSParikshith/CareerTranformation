import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../services/auth.guard';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private fb:FormBuilder, private http : HttpClient, private router : Router, private authGaurd: AuthGuard,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    username : ['user001',Validators.compose([ Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
    password : ['pass001',Validators.compose([ Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
    
  });

  login() {
    console.log("hi");
    let url = 'https://localhost:7145/CareerTransformation/LoginData?userName='
            + this.loginForm.value.username +'&password='+ this.loginForm.value.password;
    
    this.http.get<boolean>(url).subscribe((logdata) =>
      {
        console.log(logdata);
        {
          if(logdata){
            console.log("match");
            this.authService.token = true;
           
            localStorage.setItem('SessionUser', 'match');
            this.router.navigate(['support-page']);
          }
          else {
            alert('id/pw mismatch');
            this.authService.token = false;
           
          }
      }
      });
    
  }


}

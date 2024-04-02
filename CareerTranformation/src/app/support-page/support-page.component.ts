import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support-page',
  templateUrl: './support-page.component.html',
  styleUrls: ['./support-page.component.css']
})
export class SupportPageComponent implements OnInit {
  // isFormVisible: boolean = false;
  visibleComponent : any;
  // ngTemplates : any = ['unreg','issues','others'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleComponentVisible(btn: string)
  {
    this.visibleComponent = btn; 
    console.log(this.visibleComponent + "page");
  }
    
  back(){
    this.router.navigate(['user-form']);
  }
  
  logout(){

  }
    
}

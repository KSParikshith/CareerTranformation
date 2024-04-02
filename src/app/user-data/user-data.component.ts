import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  formInput :any;
  course : any=[];
  courseArray : any;
  dateTime : any;
  
  shortGoal : any = 'As a kick start to your international career, we suggest you take up the following training';
  midGoal : any = 'In a span of 6 months to 1 year of time from the date of '+
                'joining the job, we suggest you take up the following training';
  longGoal : any = 'In a span of 2 years of time from the date of joining the job, '+ 
                'we suggest you take up the following certification program';
  defaultMsg : any  = "After analysing the given input, we recommend you to contact our consultant at " ;
  supUrl : any;

  //courseType: any;
  
  constructor(private router:Router, private http:HttpClient,)
            { }

  ngOnInit(): void {
    this.formInput = history.state.formInput;
    this.courseArray = history.state.courseArray;
    console.log(this.formInput);
    console.log( this.course);
    console.log(JSON.stringify(this.formInput));

    
    if(this.formInput.GraduationStatus == 'pursuing') {
      this.shortGoal = 'We suggest you to complete graduation before taking any training but if you want'
                      +' we suggest you take up the following training';
    }

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.dateTime = date +' '+time;


    this.getCourseArray();
  }

  
  getCourseArray() {    
    var x = 0; 
    for(var i=0; i < this.courseArray.length;i++){
      if (x < 3){
          if (x < 2){
            if (x < 1){
              if(this.courseArray[i].courseType.toLowerCase() === "short"){
                this.course.push(this.courseArray[i]);
                x=1;
              }
            }
            if(this.courseArray[i].courseType.toLowerCase() === "mid"){
              this.course.push(this.courseArray[i]);
              x=2;
            }
          }
        if(this.courseArray[i].courseType.toLowerCase() === "long"){
          this.course.push(this.courseArray[i]);
          x=3;
        }
      }
    }

    if (this.course.length <1 ) {
      this.defaultMsg = "After analysing the given input, we recommend you to contact our consultant at ";
      console.log('logging if statement');
      if(this.formInput.DesiredOccupation != '99991'){
        //const myFormData = new FormData(this.formInput.target);
       debugger
        let candidateData = {
          Name: this.formInput.Name,
          DateOfBirth: this.formInput.DateOfBirth,
          Location: this.formInput.Location,
          ContactNo: this.formInput.ContactNo,
          Email: this.formInput.Email,
          GraduationStatus: this.formInput.GraduationStatus,
          Stream: this.formInput.Stream,
          YearOfPass: this.formInput.YearOfPass,
          DesiredOccupation: this.formInput.DesiredOccupation,
          ExpectedSalaryPerMonth: this.formInput.ExpectedSalaryPerMonth,
          TimeInvestment: this.formInput.TimeInvestment,
          MoneyInvestment: this.formInput.MoneyInvestment
        };
        let url = 'https://localhost:7145/CareerTransformation/CandidateData';
        var header = new HttpHeaders ({'Content-Type': 'application/json'});   
        let options = {headers :header };
        this.http.post(url,JSON.stringify(candidateData), options).subscribe((res) =>
        {
          console.log(res);
        });
    
        console.log('sending data to db')
      }
    }
    else  {
      this.defaultMsg = "For any further qeries please contact our consultant at";
    }
    
  }

  
  onPrint() {
    window.print();
  }

  back(){
    this.router.navigate(['user-form']);
  }
}
 
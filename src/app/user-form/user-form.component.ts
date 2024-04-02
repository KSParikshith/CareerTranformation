import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
}) 


export class UserFormComponent implements OnInit {
  loc : any;
  jobRole : any = [{jobId : 0, job : 'xyz'}];
  courseTime : any;
  CourseData : any;
  today = new Date(); 
  tempJob : any;

  formData = this.fb.group({
    Name : ['zzzzzzzz',Validators.compose([ Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
    DateOfBirth : ['1998-07-22', Validators.required],
    Location : ['Hyderabad', Validators.required],
    ContactNo : ['9998887776', Validators.compose([Validators.required,Validators.min(1000000000),Validators.max(9999999999)])],
    Email : ['abc@xyz.com', Validators.compose([ Validators.required, Validators.email])],
    GraduationStatus : ['pursuing', Validators.required],
    Stream : ['B.Com', Validators.required],
    YearOfPass : ['2010', Validators.compose([Validators.required, Validators.min(2000), Validators.max(this.today.getFullYear()+2)])],
    DesiredOccupation : ['', Validators.required],
    ExpectedSalaryPerMonth : ['100000', Validators.required],
    TimeInvestment : ['39', Validators.required],
    MoneyInvestment : ['999999', Validators.required],
    
  
  });
  
  static formData: any;
  form_div_val : string="";
  filteredCodes: any;
  filterCourseCodesControl: any;

  constructor(private fb:FormBuilder, public snackBar:MatSnackBar, private router:Router,
              private http:HttpClient, divElement: ElementRef) { 
                this.form_div = divElement;
              }

  ngOnInit(): void {
    this.getLocationDetails();
    this.getJobDetails();
    this.getCourseDuration(); 
  }


  @ViewChild('form_div', { static: true }) form_div: ElementRef;
    
  
  button(event : any) {
    const container = this.form_div.nativeElement;
   // const container = document.getElementById('form-div');
    event.target.id == "academic"? container?.classList.add('right-panel-active'):
    container?.classList.remove('right-panel-active');
  }

  getLocationDetails() {
    let   url = 'https://localhost:7145/CareerTransformation/LocationDetails';
    this.http.get(url).subscribe((locationData) =>
     {
      this.loc = locationData
      console.log(this.loc.locationName)}
      );    
  } 
  getJobDetails() {
    let url = 'https://localhost:7145/CareerTransformation/JobDetails';
    this.http.get(url).subscribe((jobData) =>
     {
      this.jobRole = jobData
      console.log(this.jobRole)}
      );    
  } 
  getCourseDuration() {
    let url = 'https://localhost:7145/CareerTransformation/courseDuration';
    this.http.get(url).subscribe((courseDuration) =>
      {
        this.courseTime = courseDuration
      });
  }

 
  getJobData(e : any) : void {  
    let find = this.jobRole.find((x: { job: any; }) => x?.job.toLowerCase() === e.target.value.toLowerCase());
    console.log(find?.jobId);
    console.log(this.formData.value.DesiredOccupation);

    let res = /^[a-zA-Z ]+$/;
    if(res.test(find)){
      console.log("not match");
      
      this.tempJob= this.formData.value.DesiredOccupation;
      console.log(this.formData.value.DesiredOccupation);    
      
      this.formData.value.DesiredOccupation = '99991';
      console.log(this.formData.value.DesiredOccupation);
    }
    else {
      console.log("match");          
      this.formData.value.DesiredOccupation = find.jobId;
      console.log(this.formData.value.DesiredOccupation);
    }
  }

  submitUserData(){   
    if(this.formData.valid )
    { //sending ungerestered jobs to DB
      if(this.formData.value.DesiredOccupation == '99991') {
        let url = 'https://localhost:7145/CareerTransformation/UnregisteredOccupations';//?DesiredOccupation=' //+ this.tempJob ;
        var header = new HttpHeaders ({'Content-Type': 'application/json'});   
        let options = {headers :header };
        this.http.post(url,JSON.stringify(this.tempJob), options).subscribe((res) =>
        {
          console.log(res);
        });
      }

     
      //navigating to result page
      console.log(this.formData.value.DesiredOccupation, this.formData.value.MoneyInvestment, this.formData.value.TimeInvestment);
      let url = 'https://localhost:7145/CareerTransformation/CourseJobMap?jobData=' +this.formData.value.DesiredOccupation + 
              '&budget=' + this.formData.value.MoneyInvestment + '&givenTime=' + this.formData.value.TimeInvestment;
      this.http.get(url).subscribe((courseData) =>
      {
        console.log(courseData);
        this.CourseData = courseData;
        this.router.navigate(['user-data'], {state: {courseArray: this.CourseData,formInput: this.formData.value }})
      });
    }
    else {
      this.snackBar.open('Invalid Input','',{duration : 1000});
    }
  }


}
 



//PCOM project name


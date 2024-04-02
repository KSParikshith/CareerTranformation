import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {

  jobRole : any;
  tempJob : any;

  constructor(private fb : FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.getJobDetails();
  }

  formData = this.fb.group({
    courseName : ['zzzzzzzz'],
    occupation : [''],
    duration : ['39'],
    money : ['999999'],
    
  
  });
  
  getJobData(e : any) : void {  
    let find = this.jobRole.find((x: { job: any; }) => x?.job.toLowerCase() === e.target.value.toLowerCase());
    console.log(find?.jobId);
    console.log(this.formData.value.occupation);

    let res = /^[a-zA-Z ]+$/;
    if(res.test(find)){
      console.log("not match");
      
      this.tempJob= this.formData.value.occupation;
      console.log(this.formData.value.occupation);    
      
      this.formData.value.occupation = '99991';
      console.log(this.formData.value.occupation);
    }
    else {
      console.log("match");          
      this.formData.value.occupation = find.jobId;
      console.log(this.formData.value.occupation);
    }
  }

  getJobDetails() {
    let url = 'https://localhost:7145/CareerTransformation/UnregisteredOccupations';
    this.http.get(url).subscribe((jobData) =>
     {
      this.jobRole = jobData
      console.log(this.jobRole)}
    );    
  } 

}

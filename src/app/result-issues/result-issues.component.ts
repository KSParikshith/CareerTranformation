import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-result-issues',
  templateUrl: './result-issues.component.html',
  styleUrls: ['./result-issues.component.css']
})
export class ResultIssuesComponent implements OnInit {
  userData: any;
  searchList : any;
  temp : any = [];

  formData = this.fb.group({
    search : [''],
  })

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getUserList();
    
  }

  

  getUserList() {
    let url = 'https://localhost:7145/CareerTransformation/CandidateData';
    this.http.get(url).subscribe((candidateData) =>
     {
      this.userData = candidateData;
      this.temp.push(this.userData);
      console.log(this.userData,this.temp)
    });    
  } 

  getUserData() : void { 
    let found = false; 
    if (this.formData.value.search && this.userData) {
      this.temp = this.userData;
      this.searchList = [];
      for (let i = 0; i < this.userData.length; i++) {
        if (this.userData[i].contactNo == this.formData.value.search) {
          this.searchList.push(this.userData[i]);
          found = true;
        }
      }
    }  
    if(found){
      this.temp = [];
    }
    console.log(this.searchList,this.userData,this.temp);
  }
  
}

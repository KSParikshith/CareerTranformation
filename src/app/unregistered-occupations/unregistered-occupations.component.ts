import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-unregistered-occupations',
  templateUrl: './unregistered-occupations.component.html',
  styleUrls: ['./unregistered-occupations.component.css']
})
export class UnregisteredOccupationsComponent implements OnInit {

  constructor(private http : HttpClient) {   
  }

  jobList : any;

  ngOnInit(): void {
    this.getJobList()
  }

  getJobList() {
    let url = 'https://localhost:7145/CareerTransformation/UnregisteredOccupations';
    this.http.get(url).subscribe((jobData) =>
     {
      this.jobList = jobData
      console.log(this.jobList)}
      );    
  } 
  
  delete(deleteJob:any){
    console.log(deleteJob);
    let url = 'https://localhost:7145/CareerTransformation/DeleteOccupations?jobId='+deleteJob;
    
      var header = new HttpHeaders ({'Content-Type': 'application/json'});  
      //var obj = { "id": "value"};
      //var config = { data: JSON.stringify(obj) }; 
      let options = {headers :header };
      this.http.delete(url,options).subscribe((res) =>
      {
        console.log(res);
        //location.reload();
        this.getJobList();

      });   
      
  }
}

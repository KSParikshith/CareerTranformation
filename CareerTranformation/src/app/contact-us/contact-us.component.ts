import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getLocationDetails();
  }

  users: any;

  getLocationDetails() {
    let   url = 'https://localhost:7145/CareerTransformation/LocationDetails';
    this.http.get(url).subscribe((locationData) =>
     {
      this.users = locationData
      console.log(this.users)}
      );    
  }

}


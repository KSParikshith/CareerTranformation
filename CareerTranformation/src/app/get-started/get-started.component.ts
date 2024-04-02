import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  constructor(private fb:FormBuilder, public snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }


  getStartedForm = this.fb.group({
    name : ['',Validators.compose([ Validators.required, Validators.minLength(3), Validators.maxLength(30)])],
    dob : ['', Validators.required],
    contact : ['', Validators.compose([Validators.required,Validators.min(1000000000),Validators.max(9999999999)])],
    mail : ['', Validators.compose([ Validators.required, Validators.email])],
    comment : ['', Validators.compose([ Validators.required, Validators.minLength(5)])]
    
  });


  submitUserData(){
    if(this.getStartedForm.valid )
    { 
      console.log('Form submitted');
    }
    else {
      this.snackBar.open('Invalid Input','',{duration : 1000});
    }
    
  }
  
}

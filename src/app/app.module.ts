import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule }  from '@angular/common/http';

import { UserFormComponent } from './user-form/user-form.component';
import { UserDataComponent } from './user-data/user-data.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SupportPageComponent } from './support-page/support-page.component'; 
import { AuthGuard } from './services/auth.guard';
import { UnregisteredOccupationsComponent } from './unregistered-occupations/unregistered-occupations.component';
import { ResultIssuesComponent } from './result-issues/result-issues.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';


const routes: Routes = [
  {
    path: '',
    component: UserFormComponent
  },{
    path: '',
    component: UserDataComponent
  },{
    path: '',
    component: PageHeaderComponent
  },
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'user-data',
    component: UserDataComponent
  },
  
  {path: 'user-form',
  component: UserFormComponent
  },
  
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'login-page',
    component: LoginPageComponent
  },{
    path: 'support-page',
    component: SupportPageComponent,
    canActivate: [AuthGuard]
  },

]

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    UserFormComponent,
    PageHeaderComponent,
    ContactUsComponent,
    AboutUsComponent,
    GetStartedComponent,
    LoginPageComponent,
    SupportPageComponent,
    UnregisteredOccupationsComponent,
    ResultIssuesComponent,
    AddCoursesComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule ,
    MatRadioModule,
    MatSnackBarModule,
    MatTableModule,
    FlexLayoutModule,
    HttpClientModule,
  ],

  exports: [
    RouterModule,
  ],

  providers: [AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }

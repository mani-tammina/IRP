import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobcreateComponent } from './jobcreate/jobcreate.component';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanditateComponent } from './canditate/canditate.component';
import { StatusComponent } from './status/status.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { ManagementComponent } from './management/management.component';
import { InterviewerComponent } from './interviewer/interviewer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    JobcreateComponent,
    ApplyjobComponent,
    CanditateComponent,
    StatusComponent,
    UsersComponent,
    RecruiterComponent,
    ManagementComponent,
    InterviewerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

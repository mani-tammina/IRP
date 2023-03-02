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
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ForgotComponent } from './forgot/forgot.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CanditateComponent } from './canditate/canditate.component';
import { StatusComponent } from './status/status.component';
import { MatDialogModule } from '@angular/material/dialog';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './users/users.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { ManagementComponent } from './management/management.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    JobcreateComponent,
    ApplyjobComponent,
    ForgotComponent,
    CanditateComponent,
    StatusComponent,
    UsersComponent,
    RecruiterComponent,
    ManagementComponent,
    InterviewerComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
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

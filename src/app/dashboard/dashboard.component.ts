import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  recruiters:any;
  dashboard:any;
  managements:any;
  interviewers:any;
  users:any;

  recruiter(){
    this.recruiters=true;
    this.managements=false;
    this.interviewers=false;
    this.users=false;
    this.dashboard=false;
  }

  dashboards(){
    this.recruiters=false;
    this.managements=false;
    this.interviewers=false;
    this.users=false;
    this.dashboard=true;
  }


  management(){
    this.recruiters=false;
    this.managements=true;
    this.interviewers=false;
    this.users=false;
    this.dashboard=false;
  }
  interviewer(){
    this.recruiters=false;
    this.managements=false;
    this.interviewers=true;
    this.users=false;
    this.dashboard=false;
  }

  user(){
    this.recruiters=false;
    this.managements=false;
    this.interviewers=false;
    this.users=true;
    this.dashboard=false;
  }

}

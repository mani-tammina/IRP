import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

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
  getapplication: any;
  constructor(private auth : ApiServicesService){

  }
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

  ngOnInit(){
    this.auth.getApplications().subscribe((data)=>{
      console.log('getapplication',data);
      this.getapplication = data;
    })
this.dashboards();


    
  }

}

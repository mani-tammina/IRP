import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-interviewer',
  templateUrl: './interviewer.component.html',
  styleUrls: ['./interviewer.component.scss']
})
export class InterviewerComponent {
  getjobs: any;
  applications:any
constructor(private auth : ApiServicesService){
  this.auth.getApplications().subscribe((res:any) => {
    console.log(res);
    this.applications = res;
  });
}
  ngOnInit(){
    this.auth.getJobs().subscribe((data)=>{
      console.log('getapplication',data);
      this.getjobs = data;
    })
  }
}

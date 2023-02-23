import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-interviewer',
  templateUrl: './interviewer.component.html',
  styleUrls: ['./interviewer.component.scss']
})
export class InterviewerComponent {
  getjobs: any;
constructor(private auth : ApiServicesService){

}
  ngOnInit(){
    this.auth.getJobs().subscribe((data)=>{
      console.log('getapplication',data);
      this.getjobs = data;
    })
  }
}

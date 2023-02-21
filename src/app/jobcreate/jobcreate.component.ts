import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-jobcreate',
  templateUrl: './jobcreate.component.html',
  styleUrls: ['./jobcreate.component.scss']
})
export class JobcreateComponent {

  constructor(private apiService: ApiServicesService) {
    this.jobPost();
  }

  jobPost() {
    const data = {
      jobtitle: 'Angular',
      jobdesc: 'Angular Developer',
      jobtype: 'Full Time',
      skills: 'Node JS, Angular',
      experience: '5+',
      ctc: '12 LPA',
      location: 'Vizag',
      joinperiod: '30',
      status: 'pending'
    }

    this.apiService.addJob(data).subscribe(res => {
      console.log('res', res);
    })
  }

}

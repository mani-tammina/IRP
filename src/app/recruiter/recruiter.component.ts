import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss']
})
export class RecruiterComponent {
  jobsList: any;

  constructor(private api: ApiServicesService, private router: Router) {
    this.api.getJobsByUserID(sessionStorage.getItem('userId')).subscribe((res:any) => {
      console.log(res);
      this.jobsList = res;
    })
  }

  viewJob(id:any) {
    this.router.navigate(['/jobdetails', id]);
  }

}

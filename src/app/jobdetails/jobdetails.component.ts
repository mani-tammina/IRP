import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.scss']
})
export class JobdetailsComponent {
  jobId: any;
  jobDetails: any;
  applications:any;
  private sub: any;
  
  constructor(private api: ApiServicesService, private _activatedRoute : ActivatedRoute) {
    this.sub = this._activatedRoute.params.subscribe(params => {
      // console.log(params['id']);
      this.jobId = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.api.getJobByID(this.jobId).subscribe((res:any) => {
        // sessionStorage.setItem('userId', res[0]._id);
        if(res[0]) {
          this.jobDetails = res[0];
            this.api.getAppByJobID(this.jobId).subscribe((res: any) => {
              console.log(res);
              this.applications = res
            });
        }
      })
      
   });
   console.log(this.jobId);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.scss']
})
export class ApplyjobComponent {

  constructor(private apiService: ApiServicesService) {
    this.applyJob();
  }

  applyJob() {
    const data = {
      jobid: '63f461edabf8458642fa7772',
      candidateId: 'mani@gmail.com',
      experience: '5+',
      relocate: 'yes',
      expectedCTC: '12 LPA',
      noticePeriod: '30days',
      status: 'pending',
    }

    this.apiService.addApplication(data).subscribe(res => {
      console.log('res', res);
    });
  }

}

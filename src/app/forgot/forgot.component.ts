import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent {
  email: any;

  constructor(private apiService: ApiServicesService) {

  }
  reset() {
    console.log('email', this.email);
    // this.apiService.reset(this.email).subscribe(res => {
    //   console.log('res', res);
    // })
  }

}

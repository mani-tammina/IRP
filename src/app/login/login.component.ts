import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private api: ApiServicesService) {
    // this.api.getJobs();
  }

}

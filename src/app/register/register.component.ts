import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: any;
  password: any;
  email: any;
  type: any;

  constructor(private apiService: ApiServicesService) {

  }

  register() {
    const data = {
      username: 'Mani',
      type: 'recruiter',
      email: 'mani@gmail.com',
      password: 'pass'
    }
    console.log('re', data);

    this.apiService.addUser(data).subscribe(res => {
      console.log('add user res', res);
    })
  }

}

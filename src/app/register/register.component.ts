import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: any;
  type: any;
  email: any;
  password: any;
  constructor(private apiService: ApiServicesService) {

  }

  register() {
    const data = {
      username: this.username,
      type: this.type,
      email: this.email,
      password: this.password
    }
    this.apiService.addUser(data).subscribe(res => {
      console.log('User Added', res);
    })
  }

}

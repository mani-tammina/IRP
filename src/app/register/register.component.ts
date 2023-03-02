import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: any;
  // type: any;
  email: any;
  // role: any;
  password: any;
  confirmPassword: any;
  type: any = 'Recruiter';
  route: any;
  constructor(private apiService: ApiServicesService) {

  }

  register() {
    if (this.password == this.confirmPassword) {
      const data = {
        username: this.username,
        type: this.type,
        email: this.email,
        password: this.password,
      }
      console.log(data)
      this.apiService.addUser(data).subscribe(res => {
        console.log('User Added', res);
      });
    } else {
      alert('Password and Confirm Password not match');
    }

  }

}

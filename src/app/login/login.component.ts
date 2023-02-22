import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../services/api-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: any;
  password: any;

  constructor(private api: ApiServicesService, private router: Router, private toastr: ToastrService) {
  }

  login() {
    this.api.getUserByID(this.username).subscribe((res: any) => {
      if (res[0].password === this.password) {
        this.toastr.success('Login Successfully!');
        this.router.navigate(['dashboard']);
      } else {
        this.toastr.error('Login Failed!');
      }
    });
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../services/api-services.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private api: ApiServicesService, private router: Router, private toastr: ToastrService,private authService:AuthService) {
  }

 public login():void {
    this.authService.logged(this.username,this.password);
  }

}

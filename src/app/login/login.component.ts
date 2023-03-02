import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../services/api-services.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {
 
  username: string='';
  password: string='';
  showPassword: boolean=false;

  constructor(private api: ApiServicesService, private router: Router, private toastr: ToastrService,private authService:AuthService) {
  }

  // login() {
  //   this.api.getUserByID(this.username).subscribe((res: any) => {
  //     if (res[0].password === this.password) {
  //       this.toastr.success('Login Successfully!');
  //       this.router.navigate(['dashboard']);
  //     } else {
  //       this.toastr.error('Login Failed!');
  //     }
  //   });
  // }
  public login():void {
    this.authService.login(this.username,this.password);
  }
  show() {


    this.showPassword = !this.showPassword;
  }

ngOnInit(): void {
  // sessionStorage.removeItem('isLoggedIn'); 
}
}

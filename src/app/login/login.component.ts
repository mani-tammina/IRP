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
export class LoginComponent implements OnInit{

  username :string ='';
  password: string ='';

  constructor(private api: ApiServicesService, private router: Router, private toastr: ToastrService,private authService : AuthService) {
  }

  public login() {
    this.api.getUserByID(this.username).subscribe((res: any) => {
      if (!res[0]) {
        this.toastr.warning('Users not found!');
      } else if (res[0].password == this.password) {
        console.log(res[0]);
        this.toastr.success('Login Successfully!');
        if (res[0].type == 'Interviewer') {
          // this.router.navigate(['schedule'])
        } else {
        //   this.router.navigate(['dashboard'])
        this.router.navigateByUrl('dashboard');
        }
      } else {
        this.toastr.error('Login failed!');
      }
    });
    this.authService.login(this.username,this.password);
  }
  ngOnInit(): void {
    sessionStorage.removeItem('isLoggedIn');
  }

}

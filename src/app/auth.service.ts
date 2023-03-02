import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from './services/api-services.service';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiServicesService, private router: Router, private toastr: ToastrService) {
  }

  login(username: string, password: string) {

    this.api.getUserByID(username).subscribe((res: any) => {
      if(res.length == 0) {
        this.toastr.warning('User not found!');
      } 
       else if (res[0].password === password) {
        this.toastr.success('Login Successfully!');
        this.router.navigate(['dashboard']);
        sessionStorage.setItem('isLoggedIn', 'true');
      } else {
        this.toastr.error('Login Failed!');
      }
    });
  }
  
  isLoggedIn(): boolean {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }
  loggedout() {
    sessionStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }

}
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
        if (!res[0]) {
          this.toastr.warning('Users not found!');
        } else if (res[0].password == password) {
          console.log(res[0]);
          this.toastr.success('Login Successfully!');
          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('userId', res[0]._id);
          sessionStorage.setItem('userType', res[0].type);
          if (res[0].type == 'Interviewer') {
            this.router.navigate(['schedule'])
          } else {
            this.router.navigate(['dashboard'])
          }
        } else {
          this.toastr.error('Login failed!');
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
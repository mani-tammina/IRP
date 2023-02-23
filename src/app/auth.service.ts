import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from './services/api-services.service';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn = false;

 
  // private password: any;
  // private username:any;
 
  
  constructor(private api: ApiServicesService, private router: Router, private toastr: ToastrService) {
  }

  logged(username:string,password:string){
    
    this.api.getUserByID(username).subscribe((res: any) => {
      if (res[0].password === password) {
        this.toastr.success('Login Successfully!');
        this.isLoggedIn = true;
        this.router.navigate(['dashboard']);
      } else {
        this.toastr.error('Login Failed!');
      }
    });
  }

  isAuthenticated(): boolean {
    console.log(this.isLoggedIn);

    
    return  this.isLoggedIn;

    
  }
  loggedout() {
    console.log(this.isLoggedIn)
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}

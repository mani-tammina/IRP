import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent  implements OnInit {
  getjobs: any;
  getapplication: any;
  constructor(private auth : ApiServicesService){

  }

  ngOnInit(){
    this.auth.getApplications().subscribe((data)=>{
      console.log('getapplication',data);
      this.getapplication = data;
    })
  }

  // ngOnInit(){
  //   this.auth.getJobs().subscribe((data)=>{
  //     console.log('getapplication',data);
  //     this.getjobs = data;
  //   })
  // }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-jobcreate',
  templateUrl: './jobcreate.component.html',
  styleUrls: ['./jobcreate.component.scss']
})
export class JobcreateComponent implements OnInit {
 
  jobcreate !: FormGroup;

  emailsList = ['tharak37@gmail.com', 'utla.hemanth@gmail.com', 'ramyasrivaranasi@gmail.com']
  userlist : userDetails = new userDetails
  constructor(private auth : ApiServicesService,private formbuilder : FormBuilder,){
    this.auth.sendMails(this.emailsList).subscribe(res => {
      console.log(res);
    })
  }

  ngOnInit() {
    this.jobcreate = this.formbuilder.group({
      jobtitle : ['',Validators.required],
      experience : ['',Validators.required],
      jobdesc : ['',Validators.required],
      joinperiod : ['',Validators.required],
      ctc : ['',Validators.required],
      skills : [''],
      requirement : [''],
      location : [''],
      status : ['',Validators.required],
    })
  }
  submit(){
    this.userlist.jobtitle = this.jobcreate.value.jobtitle
    this.userlist.experience = this.jobcreate.value.experience
    this.userlist.location = this.jobcreate.value.location
    this.userlist.requirement = this.jobcreate.value.requirement
    this.userlist.skills = this.jobcreate.value.skills
    this.userlist.jobdesc = this.jobcreate.value.jobdesc
    this.userlist.joinperiod = this.jobcreate.value.joinperiod
    this.userlist.ctc = this .jobcreate.value.ctc
    this.userlist.status = this.jobcreate.value.status
    console.log(this.userlist)
   
    if(this.jobcreate.valid) {
      this.auth.saveJob(this.userlist).subscribe(res => {
        console.log(res);
      });
    this.jobcreate.reset();
   if(this.userlist){
    Swal.fire("successfully job created");

    }} else {
      Swal.fire("Please fill all the fields");
    }
   }
  }

export class userDetails{
  jobtitle: any;
  jobdesc: any;
  experience: any;
  joinperiod: any;
  location: any;
  skills: any;
  ctc: any;
  status: any;
  requirement: any;
}

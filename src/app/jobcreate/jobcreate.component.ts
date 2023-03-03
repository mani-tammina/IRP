import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  userlist: userDetails = new userDetails
  constructor(private auth: ApiServicesService, private formbuilder: FormBuilder,) {
    this.auth.sendMails(this.emailsList).subscribe(res => {
      console.log(res);
    })
  }

  ngOnInit() {
    this.jobcreate = this.formbuilder.group({
      jobtitle: ['', Validators.required],
      jobtype: ['', Validators.required],
      skills: ['', Validators.required],
      experience: ['', Validators.required],
      qualification: ['', ],
      joinperiod: ['', Validators.required],
      ctc: ['', ],
      positions: ['', ],
      location: ['', ],
      status: [''],
    })
  }
  submit() {
    this.userlist.userId = sessionStorage.getItem('userId')
    this.userlist.jobtitle = this.jobcreate.value.jobtitle
    this.userlist.jobtype = this.jobcreate.value.jobtype
    this.userlist.experience = this.jobcreate.value.experience
    this.userlist.location = this.jobcreate.value.location
    this.userlist.positions = this.jobcreate.value.positions
    this.userlist.skills = this.jobcreate.value.skills
    this.userlist.qualification = this.jobcreate.value.qualification
    this.userlist.joinperiod = this.jobcreate.value.joinperiod
    this.userlist.ctc = this.jobcreate.value.ctc
    this.userlist.status = 'pending'
    console.log(this.userlist)

    // if (this.jobcreate.valid) {
      this.auth.saveJob(this.userlist).subscribe(res => {
        console.log(res);
        Swal.fire("successfully job created");
        this.jobcreate.reset();
      });

    // } else {
    //   Swal.fire("Please fill all the fields");
    // }
  }
}

export class userDetails {
  userId: any;
  jobtitle: any;
  jobtype: any;
  qualification: any;
  experience: any;
  joinperiod: any;
  location: any;
  skills: any;
  ctc: any;
  status: any;
  positions: any;
}

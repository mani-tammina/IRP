import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-jobcreate',
  templateUrl: './jobcreate.component.html',
  styleUrls: ['./jobcreate.component.scss']
})
export class JobcreateComponent implements OnInit {
 
  jobcreate !: FormGroup;
  userlist : userDetails = new userDetails
  job: any;
  selectedVal: any;
  selectedOpt: any;
  Qualification: any;
  JoiningPeriod :any;
  CTCOffered : any;
  WorkShifts : any;

  constructor(private http : ApiServicesService,private formbuilder : FormBuilder,){}

  ngOnInit() {
    this.jobcreate = this.formbuilder.group({
      Designations : ['',Validators.required],
      Experience : ['',Validators.required],
      Qualification : ['',Validators.required],
      JoiningPeriod : ['',Validators.required],
      CTCOffered : ['',Validators.required],
      SkillsRequired : [''],
      Requirement : [''],
      RelocationPlace : [''],
      WorkShifts : ['',Validators.required],
    })
  }
  submit(){
    this.userlist.Designation = this.jobcreate.value.Designation
    this.userlist.Experience = this.jobcreate.value.Experience
    this.userlist.RelocationPlace = this.jobcreate.value.RelocationPlace
    this.userlist.Requirement = this.jobcreate.value.Requirement
    this.userlist.SkillsRequired = this.jobcreate.value.SkillsRequired
    this.userlist.Qualification = this.jobcreate.value.Qualification
    this.userlist.JoiningPeriod = this.jobcreate.value.JoiningPeriod
    this.userlist.CTCOffered = this .jobcreate.value.CTCOffered
    this.userlist.WorkShifts = this.jobcreate.value.WorkShifts
    console.log(this.userlist)
    this.http.getJobs(this.userlist).subscribe(res => {console.log(res)})
  }
}

export class userDetails{
  Designation: any;
  SkillsRequired = ''
  Requirement = ''
  RelocationPlace = ''
  Experience: any;
  Qualification: any;
  JoiningPeriod: any;
  CTCOffered: any;
  WorkShifts: any;
}

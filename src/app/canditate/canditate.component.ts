import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiServicesService } from '../services/api-services.service';
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-canditate',
  templateUrl: './canditate.component.html',
  styleUrls: ['./canditate.component.scss']
})
export class CanditateComponent {
canditateList:canditateDetails = new canditateDetails
  canditate !: FormGroup;
  router: any;
constructor(private http:ApiServicesService , private formbuilder:FormBuilder, private dialog : MatDialog ){
}

ngOnInit(){
this.canditate = this.formbuilder.group({
jobstitle : [''],
jobDescription : [''],
experience : ['',Validators.required],
CTCExpected : [''],
Relocate: ['',Validators.required],
NoticePeriod: ['',Validators.required],
JobType: ['',Validators.required],
description:['']
})
}
apply(){
this.canditateList.jobstitle= this.canditate.value.jobstitle
this.canditateList.jobDescription = this.canditate.value.jobDescription
this.canditateList.experience = this.canditate.value.experience
this.canditateList.CTCExpected = this.canditate.value.CTCExpected
this.canditateList.Relocate = this.canditate.value.Relocate
this.canditateList.NoticePeriod = this.canditate.value.NoticePeriod
this.canditateList.JobType = this.canditate.value.JobType
this.canditateList.description = this.canditate.value.description
console.log(this.canditateList)
this.http.saveApplication(this.canditateList).subscribe(res => {
console.log(res);
});
  this.http.saveJob(this.canditateList).subscribe(res => {
    console.log(res);
  });
this.canditate.reset();
this.router.navigateByUrl('../status');
}
}
export class canditateDetails{
  jobstitle: any;
  jobDescription: any;
  experience: any;
  CTCExpected: any;
  Relocate: any;
  NoticePeriod: any;
  JobType: any;
  description: any;
}

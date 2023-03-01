import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiServicesService } from '../services/api-services.service';

@Component({
  selector: 'app-canditate',
  templateUrl: './canditate.component.html',
  styleUrls: ['./canditate.component.scss']
})
export class CanditateComponent {
  isinserted=false;
canditateList:canditateDetails = new canditateDetails
  canditate !: FormGroup;
constructor(private http:ApiServicesService , private formbuilder:FormBuilder, private dialog : MatDialog,private router:Router ){
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
if(this.canditate.valid){
  this.http.saveApplication(this.canditateList).subscribe(res => {
    console.log(res);
    });
    this.http.saveJob(this.canditateList).subscribe(res => {
      console.log(res);
    });
    this.isinserted=true;
}
this.canditate.reset();
if(this.isinserted){
  Swal.fire({
    title: 'Are you sure?',
    text: 'You are about to submit the form',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, submit it!',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      this.router.navigate(['status']);
    } 
    //  else if (result.isDismissed === Swal.DismissReason.cancel) {
    //   // If the user clicks on the Cancel button, do nothing

    // }
  }) 
  
}
else {
  Swal.fire("Please fill all the fields");
}

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

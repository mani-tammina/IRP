import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.scss']
})
export class ApplyjobComponent {

  canditateList: canditateDetails = new canditateDetails
  canditate !: FormGroup;
  constructor(private http: ApiServicesService, private formbuilder: FormBuilder) {

  }


  ngOnInit() {
    this.canditate = this.formbuilder.group({
      jobstitle: [''],
      jobDescription: [''],
      experience: ['', Validators.required],
      CTCExpected: [''],
      Relocate: ['', Validators.required],
      NoticePeriod: ['', Validators.required],
      JobType: ['', Validators.required],
      description: ['']
    })
  }
  apply() {
    this.canditateList.jobstitle = this.canditate.value.jobstitle
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
  }
}
export class canditateDetails {
  jobstitle: any;
  jobDescription: any;
  experience: any;
  CTCExpected: any;
  Relocate: any;
  NoticePeriod: any;
  JobType: any;
  description: any;

}
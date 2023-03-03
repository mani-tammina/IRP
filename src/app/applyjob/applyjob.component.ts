import { Component } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-applyjob',
  templateUrl: './applyjob.component.html',
  styleUrls: ['./applyjob.component.scss']
})
export class ApplyjobComponent {

  canditateList: canditateDetails = new canditateDetails
  canditate !: FormGroup;
  jobId: any;
  private sub: any;
  constructor(private http: ApiServicesService, private formbuilder: FormBuilder, private _router: Router,
    private _activatedRoute: ActivatedRoute) {
      this.sub = this._activatedRoute.params.subscribe(params => {
        this.jobId = params['id']; // (+) converts string 'id' to a number
        // In a real app: dispatch action to load the details here.
     });

  }


  ngOnInit() {
    this.canditate = this.formbuilder.group({
      email: ['', Validators.required],
      experience: ['', Validators.required],
      CTCCurrent: [''],
      CTCExpected: [''],
      Relocate: ['', Validators.required],
      NoticePeriod: ['', Validators.required],
      JobType: ['', Validators.required],
      skills: ['']
    })
  }
  apply() {

    this.canditateList.jobid = this.jobId
    this.canditateList.candidateid = this.canditate.value.email
    this.canditateList.experience = this.canditate.value.experience
    this.canditateList.ctccurrent = this.canditate.value.CTCCurrent
    this.canditateList.ctcexpected = this.canditate.value.CTCExpected
    this.canditateList.relocate = this.canditate.value.Relocate
    this.canditateList.noticeperiod = this.canditate.value.NoticePeriod
    this.canditateList.jobtype = this.canditate.value.JobType
    this.canditateList.skills = this.canditate.value.skills
    this.canditateList.status = 'pending'
    console.log(this.canditateList)
    this.http.saveApplication(this.canditateList).subscribe((res:any) => {
      console.log(res);
      if(res) {
        Swal.fire("successfully applied!");
        this.canditate.reset();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
export class canditateDetails {
  jobid:any;
  candidateid:any;
  experience: any;
  ctccurrent: any;
  ctcexpected: any;
  relocate: any;
  noticeperiod: any;
  jobtype: any;
  skills: any;
  status: any;

}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyjobComponent } from './applyjob/applyjob.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotComponent } from './forgot/forgot.component';
import { JobcreateComponent } from './jobcreate/jobcreate.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CanditateComponent } from './canditate/canditate.component';
import { StatusComponent } from './status/status.component';
import { InterviewerComponent } from './interviewer/interviewer.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AuthGuard } from './auth.guard';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'prefix' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'jobcreate', component: JobcreateComponent },
  { path: 'jobdetails/:id', component: JobdetailsComponent },
  { path: 'applyjob/:id', component: ApplyjobComponent },
  { path: 'canditate', component: CanditateComponent },
  { path: 'status', component: StatusComponent },
  { path: 'interviewer', component: InterviewerComponent },
  { path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

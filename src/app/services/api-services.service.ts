import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) {
    // this.getJobs();
  }

  getUsers() {
    console.log('caling');
    return this.http.get('http://localhost:3000/api/getusers');
  }

  getJobs() {
    console.log('caling2');
    return this.http.get<any>('http://localhost:3000/api/getjobs')
  }

  getApplications() {
    console.log('caling');
    return this.http.get('http://localhost:3000/api/getapplications');
  }

  saveJob(payload:any) {
    console.log('came222')
    return this.http.post('http://localhost:3000/api/saveJob',payload,{responseType: 'text'})}
   
    saveApplication(data:any) {
    console.log('raara')
    return this.http.post('http://localhost:3000/api/saveApplication',data,{responseType: 'text'})
  }

  sendMails(list:any) {
    return this.http.post('http://localhost:3000/email/sendMails', list)
  }
}

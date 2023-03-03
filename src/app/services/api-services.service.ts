import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  saveUser(data: { username: any; role: any; email: any; password: any; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {
    // this.getJobs();
  }

  getUsers() {
    console.log('caling');
    return this.http.get('http://localhost:3000/api/getusers');
  }

  getJobs() {
    return this.http.get('http://localhost:3000/api/getjobs');
  }

  saveJob(payload: any) {
    return this.http.post('http://localhost:3000/api/saveJob', payload, { responseType: 'text' })
  }
  saveApplication(data: any) {
    return this.http.post('http://localhost:3000/api/saveApplication', data, { responseType: 'text' })
  }

  getApplications() {
    return this.http.get('http://localhost:3000/api/getapplications');
  }

  getUserByID(id: string) {
    return this.http.get('http://localhost:3000/api/getuser/' + id);
  }

  addUser(data: any) {
    return this.http.post('http://localhost:3000/api/saveUser', data, { responseType: 'text' })
  }

  addJob(data: any) {
    return this.http.post('http://localhost:3000/api/saveJob', data)
  }

  addApplication(data: any) {
    return this.http.post('http://localhost:3000/api/saveApplication', data)
  }

  sendMails(list: any) {
    return this.http.post('http://localhost:3000/email/sendMails', list)
  }

  getJobByID(id:any) {
    return this.http.get('http://localhost:3000/api/getJobByID/'+ id)
  }

  getAppByJobID(id:any) {
    return this.http.get('http://localhost:3000/api/getAppByJobID/'+ id)
  }

  getJobsByUserID(id:any) {
    return this.http.get('http://localhost:3000/api/getJobsByUserID/'+ id)
  }
}

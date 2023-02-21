import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor(private http: HttpClient) {
    this.getJobs();
  }

  getUsers() {
    console.log('caling');
    return this.http.get('http://localhost:3000/api/getusers');
  }

  getJobs() {
    console.log('caling');
    return this.http.get('http://localhost:3000/api/getjobs');
  }

  getApplications() {
    console.log('caling');
    return this.http.get('http://localhost:3000/api/getapplications');
  }

  getUserByID(id: number) {
    console.log('caling');
    return this.http.get('http://localhost:3000/api/getusers/' + id);
  }

  // getJobByID() {
  //   console.log('caling');
  //   return this.http.get('http://localhost:3000/api/getjobs');
  // }

  // getApplicationByID() {
  //   console.log('caling');
  //   return this.http.get('http://localhost:3000/api/getapplications');
  // }

  addUser(data: any) {
    return this.http.post('http://localhost:3000/api/saveUser', data)
  }

  addJob(data: any) {
    return this.http.post('http://localhost:3000/api/saveJob', data)
  }

  addApplication(data: any) {
    return this.http.post('http://localhost:3000/api/saveApplication', data)
  }
}

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
    return this.http.get('http://localhost:3000/api/getjobs');
  }

  getApplications() {
    return this.http.get('http://localhost:3000/api/getapplications');
  }

  getUserByID(id: string) {
    return this.http.get('http://localhost:3000/api/getuser/' + id);
  }

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

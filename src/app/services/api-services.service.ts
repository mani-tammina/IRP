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
}

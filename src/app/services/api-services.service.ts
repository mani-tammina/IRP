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
    return this.http.get('http://localhost:3000/api/findallJobs');
  }

  getJobs() {
    console.log('caling');
    return this.http.get('http://localhost:3000/api/findallJobs');
  }

  getApplications() {
    console.log('caling');
    return this.http.get('http://localhost:3000/api/findallJobs');
  }
}

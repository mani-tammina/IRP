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

  getJobs(data:any) {
    console.log('caling2');
    return this.http.post<any>('http://localhost:3000/api/getjobs',data).pipe(map(res => { return res}))
  }

  getApplications() {
    console.log('caling');
    return this.http.get('http://localhost:3000/api/getapplications');
  }
}

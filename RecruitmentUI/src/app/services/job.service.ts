import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Jobapply } from '../components/jobapply/jobapply';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getJobOpenings() {
   return this.http.get(environment.apiUrl + 'JobOpenings');
  }

  getJobDetails(id: string) {
    return this.http.get(environment.apiUrl + 'JobOpenings/' + id);
  }

  applyJob(job: Jobapply) {
    return this.http.post(environment.apiUrl + 'JobAttachments', job);
  }
}

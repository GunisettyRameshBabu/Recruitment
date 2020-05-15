import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Jobapply } from '../components/jobapply/jobapply';
import { Opening } from '../components/add-openings/opening';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getJobOpenings(type,userId) {
   return this.http.get(environment.apiUrl + 'Openings/GetOpeningsByCountry/'+ type+'/'+userId);
  }

  getJobDetails(id: string) {
    return this.http.get(environment.apiUrl + 'Openings/' + id);
  }

  applyJob(job: Jobapply) {
    return this.http.post(environment.apiUrl + 'JobAttachments', job);
  }

  addOpening(opening: Opening) {
    return this.http.post(environment.apiUrl + 'Openings', opening);
  }

  getNewJobid(id: any) {
    return this.http.get(environment.apiUrl + 'Countries/GetJobCode/'+id);
  }
}

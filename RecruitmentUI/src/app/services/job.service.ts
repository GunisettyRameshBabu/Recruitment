import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Jobapply } from '../components/jobapply/jobapply';
import { Opening } from '../components/add-openings/opening';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  getJobOpenings(type, userId) {
    return this.http.get(
      environment.apiUrl +
        'Openings/GetOpeningsByCountry/' +
        type +
        '/' +
        userId
    );
  }

  getJobDetails(id: string) {
    return this.http.get(environment.apiUrl + 'Openings/' + id);
  }

  getJobForEdit(id: number) {
    return this.http.get(environment.apiUrl + 'Openings/GetOpeningById/' + id);
  }

  applyJob(job: Jobapply) {
    return this.http.post(environment.apiUrl + 'JobAttachments', job);
  }

  addOrUpdateOpening(opening: Opening) {
    if (opening.id == 0) {
      return this.http.post(environment.apiUrl + 'Openings', opening);
    } else {
      return this.http.put(environment.apiUrl + 'Openings/'+opening.id, opening);
    }
  }

  getNewJobid(id: any) {
    return this.http.get(environment.apiUrl + 'Countries/GetJobCode/' + id);
  }

  getCandidateStatus() {
    return this.http.get(environment.apiUrl + 'JobCandidateStatus');
  }

  getJobCandidates(jobid) {
    return this.http.get(environment.apiUrl + 'JobCandidates/GetByJobId/'+ jobid);
  }

  public addOrUpdateCandidate = (candidate) => {
    if (candidate.id != 0) {
      return this.http.put(
        environment.apiUrl + 'JobCandidates/'+ candidate.id,
        candidate
      );
    } else {
      return this.http.post(
        environment.apiUrl + 'JobCandidates',
        candidate
      );
    }
  };

  public addCandidateResume = (id, files) => {
    const formData = new FormData();
    if (files != undefined && files.length > 0) {
      let fileToUpload = files[0];
      formData.append('file', fileToUpload, fileToUpload.name);
    }
    return this.http.put(
      environment.apiUrl + 'JobCandidates/UploadAttachment/' + id,
      formData , {reportProgress: true }
    );
  };
}

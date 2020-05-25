import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Opening } from '../components/add-openings/opening';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}

  getJobOpenings(userId) {
    return this.http.get(
      environment.apiUrl + 'Openings/GetOpeningsByCountry/' + userId
    );
  }

  getJobs(id, userid) {
    return this.http.get(environment.apiUrl + 'Openings/GetJobs/' + id + '/'+ userid);
  }

  getJobDetails(id) {
    return this.http.get(environment.apiUrl + 'Openings/' + id);
  }

  getJobForEdit(id: number) {
    return this.http.get(environment.apiUrl + 'Openings/GetOpeningById/' + id);
  }



  addOrUpdateOpening(opening: Opening) {
    if (opening.id == 0) {
      return this.http.post(environment.apiUrl + 'Openings', opening);
    } else {
      return this.http.put(
        environment.apiUrl + 'Openings/' + opening.id,
        opening
      );
    }
  }

  getNewJobid(id: any) {
    return this.http.get(environment.apiUrl + 'Countries/GetJobCode/' + id);
  }

  getCandidateStatus() {
    return this.http.get(environment.apiUrl + 'JobCandidateStatus');
  }

  getJobCandidates(jobid) {
    return this.http.get(
      environment.apiUrl + 'JobCandidates/GetByJobId/' + jobid
    );
  }

  getJobCandidate(id) {
    return this.http.get(
      environment.apiUrl + 'JobCandidates/' + id
    );
  }

  getDashboardData() {
    return this.http.get(
      environment.apiUrl + 'Openings/GetDashBoardData'
    );
  }

  public addOrUpdateCandidate = (candidate) => {
    if (candidate.id != 0) {
      return this.http.put(
        environment.apiUrl + 'JobCandidates/' + candidate.id,
        candidate
      );
    } else {
      return this.http.post(environment.apiUrl + 'JobCandidates', candidate);
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
      formData
    );
  };

  public addRecruitCareResume = (id, files) => {
    const formData = new FormData();
    if (files != undefined && files.length > 0) {
      let fileToUpload = files[0];
      formData.append('file', fileToUpload, fileToUpload.name);
    }
    return this.http.put(
      environment.apiUrl + 'RecruitCares/UploadAttachment/' + id,
      formData
    );
  };

  public GetRecruitCare(userid) {
    return this.http.get(
      environment.apiUrl + 'RecruitCares/GetRecruitCareByMe/' + userid
    );
  }

  public MoveToJobCandidates(id) {
    return this.http.delete(
      environment.apiUrl + 'RecruitCares/MoveToJobCandidates/' + id
    );
  }
  public addOrUpdateRecruitCare(item) {
    if (item.id > 0) {
      return this.http.put(
        environment.apiUrl + 'RecruitCares/' + item.id,
        item
      );
    } else {
      return this.http.post(environment.apiUrl + 'RecruitCares', item);
    }
  }

  public SendEmail(data: { key: string , value: any }[] ) {
    return this.http.post(
      environment.apiUrl + 'RecruitCares/SendEmail', data
    );
  }
}

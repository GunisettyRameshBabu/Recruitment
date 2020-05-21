import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MasterDataTypes } from '../constants/api-end-points';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  GetUsersByCountry() {
    return this.http.get(environment.apiUrl +  'Users/GetUsersByCountry');
  }

  constructor(private http: HttpClient) { }

  

  getClientCodes() {
    return this.http.get(environment.apiUrl + 'ClientCodes');
  }

  getCountries() {
    return this.http.get(environment.apiUrl + 'Countries');
  }

  getStatesByCountry(id: number) {
    return this.http.get(environment.apiUrl + 'States/GetStatesByCountry/'+ id);
  }

  getCitiesByState(id: number) {
    return this.http.get(environment.apiUrl + 'Cities/GetCitiesByState/'+ id);
  }

  downloadResume(id: number) {
    return this.http.get(environment.apiUrl + 'JobCandidates/Download/'+ id, {responseType: 'blob'});
  }


}

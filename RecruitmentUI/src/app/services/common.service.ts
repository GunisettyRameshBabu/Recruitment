import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getMasterData(type: string) {
    return this.http.get(environment.apiUrl + type);
  }

  getStatesByCountry(id: number) {
    return this.http.get(environment.apiUrl + 'States/GetStatesByCountry/'+ id);
  }

  getCitiesByState(id: number) {
    return this.http.get(environment.apiUrl + 'Cities/GetCitiesByState/'+ id);
  }


}

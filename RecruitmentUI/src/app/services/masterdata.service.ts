import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MasterDataTypes } from '../constants/api-end-points';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterdataService {

  constructor(private http: HttpClient) { }

  getMasterDataByType(type: MasterDataTypes) {
    return this.http.get(environment.apiUrl + 'MasterDatas/GetMasterDataByType/' + (type as number));
  }

  getMasterDataType() {
    return this.http.get(environment.apiUrl + 'MasterDataTypes');
  }

  getMasterData() {
    return this.http.get(environment.apiUrl + 'MasterDatas');
  }

  addOrUpdateMasterData(data: any) {
    if (data.id > 0) {
      return this.http.put(environment.apiUrl + "MasterDatas/"+ data.id,data);
    } else {
      return this.http.post(environment.apiUrl + "MasterDatas",data);
    }
  }
}

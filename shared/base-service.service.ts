import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/configs/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient) {}

  postReq(model: any, path?: String) {
    return this.http.post(environment.BASE_URL + path, model);
  }
  getReq(path: String, modelName?: String, model?: any) {
    let url = environment.BASE_URL + path + '?' + modelName + '=' + model;
    if (modelName && model) {
      url = environment.BASE_URL + path + '?' + modelName + '=' + model;
    } else {
      url = environment.BASE_URL + path;
    }
    return this.http.get(url);
  }
  getReqByUrl(url) {
    return this.http.get(environment.BASE_URL + url);
  }
  deleteReq(model: any, path: any) {
    return this.http.delete(environment.BASE_URL + path, {
      params: { model },
    });
  }
  putReq(model: any, path: string) {
    return this.http.put(environment.BASE_URL + path, model);
  }
}

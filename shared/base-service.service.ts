import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient) {}

  postReq(model: any, path?: String) {
    return this.http.post('http://localhost:5000/api/' + path, model);
  }
  getReq(path?: String, model?: any) {
    return this.http.get('http://localhost:5000/api/' + path, model);
  }
}

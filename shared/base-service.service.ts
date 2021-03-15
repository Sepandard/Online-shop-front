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
  // getReq(model?: any, path?: String) {
  //   let st :String = model
  //   this.http.get('localhost:5000/api/',);
  // }
}

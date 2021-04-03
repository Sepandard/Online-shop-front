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
  getReq(path: String, modelName?:String ,model?: any) {
    let url ='http://localhost:5000/api/' + path +'?'+modelName+"="+model
    if (modelName  && model ){
      url ='http://localhost:5000/api/' + path +'?'+modelName+"="+model
    }
    else{
      url = 'http://localhost:5000/api/' + path;
    }
    return this.http.get(url);
  }
  getReqByUrl(url){
    return this.http.get("http://localhost:5000/api/"+url);
  }
   deleteReq(model: any, path: any){
    return this.http.delete('http://localhost:5000/api/' + path, {
      params: { model },
    });
   }
}

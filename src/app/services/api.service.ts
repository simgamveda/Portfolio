import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public firebaseUrl=environment.firebaseURL;
  constructor(
    private http:HttpClient
  ) { }

  public executePut(putData:putData)
  {
    return this.http.post(this.firebaseUrl+putData.url,putData.body);
  }
}
export interface putData
{
  url:string,
  body:any;
}


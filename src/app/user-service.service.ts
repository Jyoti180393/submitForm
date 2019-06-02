import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { 
    
  }

  getUser(url){
    return this.httpClient.get(url); 
  }

  createUser(name: any, job: any) {
    console.log(name,job);
    const url = "https://reqres.in/api/users/";
    const body = {
      name: name,
      job: job
    }
    return this.httpClient.post( url , body);
  }
}

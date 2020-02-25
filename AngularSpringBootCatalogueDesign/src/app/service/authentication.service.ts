import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

export class User{
  constructor(public status:string){

  }
}
export class JwtResponse{
  constructor(public jwrtocken:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  // authenticate(username, password) {
  //   if (username === "praveen" && password === "password") {
  //     sessionStorage.setItem('username', username)
  //    return true;
  //   } else {
  //     return false;
  //   }
  // }

 /*  authenticate(username, password) {
     return this.httpClient.post<any>('http://localhost:8080/authenticate',{username,password}).subscribe(userData=>{
      sessionStorage.setItem('username',username);
          let tokenStr= 'Bearer '+userData.token;
          sessionStorage.setItem('token', tokenStr);
          
    }); */

    authenticate(username, password) {
     return this.httpClient.post<any>('http://localhost:8080/authenticate',{username,password})
    }
    /* .pipe(
     map(
       userData => {
         console.log(userData);
        sessionStorage.setItem('username',username);
        let tokenStr= 'Bearer '+userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )
    ); */
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
   
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
  }


}

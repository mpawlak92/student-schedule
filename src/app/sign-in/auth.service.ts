import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, tap } from 'rxjs';


import { AuthResponceData } from '../helpers/auth-interfaces';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  subscribe() {
      throw new Error("Method not implemented.");
  }
  user = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.user.asObservable();

  constructor(private http:HttpClient) { }

  logIn(email:string, password:string){
    
   return  this.http.post<AuthResponceData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC0QjG9N_-4on_yw5xLQnn_Nj6ximSsEe0',{
      email:email,
      password:password,
      returnSecureToken: true
    }).pipe(tap(resData =>{
      const expirationDate = new Date( new Date().getTime() + +resData.expiresIn *10000)
      const user = new User(
        resData.email, 
        resData.localId, 
        resData.idToken, 
        expirationDate
        )
        console.log(user)
        this.user.next(user)
        
    })
    )
  }

  logout(){
    this.user.next(null)
  }
}

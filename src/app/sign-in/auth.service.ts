import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, tap } from 'rxjs';


import { AuthResponceData } from '../interfaces/auth-interfaces';
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private tokenExpirationTime: any = null
  
  subscribe() {
      throw new Error("Method not implemented.");
  }
  user = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.user.asObservable();

  constructor(private http:HttpClient, private router:Router) { }

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
        this.user.next(user)
        this.autoLogout(+resData.expiresIn *10000)
        localStorage.setItem('userData', JSON.stringify(user))
        
    })
    )
  }
  autoLogin(){
    const userData = localStorage.getItem('userData')
    if(!userData) {
      return
    }else{
      const userDatObj:{
        email: string,
        id: string,
        _token: string,
        _tokenExpirationDate: Date} = JSON.parse(userData)

      const loadedUser = new User(
        userDatObj.email,
        userDatObj.id,
        userDatObj._token,
        new Date(userDatObj._tokenExpirationDate)
        )

      if(loadedUser.token !== 'token is out of time'){
        this.user.next(loadedUser)
        const expirationDate = new Date(userDatObj._tokenExpirationDate).getTime() - new Date().getTime()
        this.autoLogout(expirationDate)
      }
      this.tokenExpirationTime = null      
    }
  }

  logout(){
    this.user.next(null)
    localStorage.removeItem('userData')
    this.router.navigate(['/start/sign-in'])
    if(this.tokenExpirationTime){
      clearTimeout(this.tokenExpirationTime)
    }

  }
  autoLogout(expirationDuration:number){
   this.tokenExpirationTime = setTimeout(()=>{
      this.logout()
    },expirationDuration)
  }
}

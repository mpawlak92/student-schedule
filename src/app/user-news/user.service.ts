
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable,map } from 'rxjs';

import { userType } from '../interfaces/interfaces';
import { userDTO } from '../interfaces/interfacesDTO';

@Injectable({
  providedIn: 'root'
}) 
export class UserService implements OnInit {
  

  constructor(private http:HttpClient, ) { 
  }

  ngOnInit(): void {
     
  } 
  
  private convertToUser(user:userDTO):userType{
    return{
        id: user.id,
        name: user.name,
        email: user.email,
        studentCardNumber:user.studentCardNumber
    }
  }
  getAllUsers():Observable<userDTO[]>{
      return this.http.get<userDTO[]>(environment.API_URL + '/users.json',).pipe(
        map(users => users.map(user => {
          return this.convertToUser(user)
        }
      )))
  }
  
 
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../sign-in/auth.service';
import { scheduleDTO } from '../interfaces/interfacesDTO';
import { scheduleType } from '../interfaces/interfaces';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  constructor(private http:HttpClient, private authService:AuthService) { 
  }


  
  private convertToSchedule(classes:scheduleDTO):scheduleType{
    return{      
    date: classes.date,
    classes: classes.classes
   }
}
  getSchedule():Observable<scheduleDTO[]>{
      return this.http.get<scheduleDTO[]>(environment.API_URL + '/schedule.json',).pipe(
        map(classes => classes.map(classes => {
          
          return this.convertToSchedule(classes)
        }
      )))
  }

  
}
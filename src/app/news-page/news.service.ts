import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable,exhaustMap,map, take } from 'rxjs';

import { articleType } from '../interfaces/interfaces';
import { articleDTO } from '../interfaces/interfacesDTO';
import { AuthService } from '../sign-in/auth.service';

@Injectable({
  providedIn: 'root'
}) 
export class NewsService implements OnInit {
  

  constructor(private http:HttpClient, private authService:AuthService) { 
  }

  ngOnInit(): void {
     
  } 
  
  private convertToArticle(article:articleDTO):articleType{
    return{
        id: article.id,
        category: article.category,
        img: article.img,
        heading: article.heading,
        content: article.content,
        publishDate: article.publishDate,
        writer: article.writer,
    }
  }
  getAllNews():Observable<articleDTO[]>{
      return this.http.get<articleDTO[]>(environment.API_URL + '/news.json',).pipe(
        map(articles => articles.map(article => {
          return this.convertToArticle(article)
        }
      )))
  }

  
}

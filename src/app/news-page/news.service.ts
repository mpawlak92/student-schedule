import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable,map,of } from 'rxjs';

import { articleType } from '../helpers/interfaces';
import { articleDTO } from '../helpers/interfacesDTO';

@Injectable({
  providedIn: 'root'
}) 
export class NewsService {

  constructor(private http:HttpClient) { 

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
    return this.http.get<articleDTO[]>(environment.API_URL + '/news').pipe(
      map(articles => articles.map(
        article => {
        return this.convertToArticle(article)
      }
      ))
      )
    
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { articleType } from '../helpers/interfaces';
import { Observable,map,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class NewsService {

  constructor(private http:HttpClient) { 

  }
  private convertToArticle(article:articleType):articleType{
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
  getAllNews():Observable<articleType[]>{
    return this.http.get<articleType[]>(environment.API_URL + '/news').pipe(
      map(articles => articles.map(
        article => {
        return this.convertToArticle(article)
      }
      ))
      )
    
  }
}

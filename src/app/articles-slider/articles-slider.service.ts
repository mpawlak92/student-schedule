import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { articleType } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { articleDTO } from '../interfaces/interfacesDTO';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesSliderService {

  constructor(private http: HttpClient) { }

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
  getArticles():Observable<articleType[]>{
    return this.http.get<articleType[]>(environment.API_URL + '/articles.json').pipe(map(articles => articles.map(article => {
          return this.convertToArticle(article)
        }
      )))
  }
  getarticlesCategory():Observable<string[]>{
    return this.http.get<string[]>(environment.API_URL + 'articlesCategory.json')
  }
}

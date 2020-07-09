import { Injectable } from '@angular/core';
import { API } from './API';
import { HttpClient } from '@angular/common/http';
import { FilmModule } from '../film/filmModule';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService extends API {
  url="films";                               /** ссылка на массив объектов в db.json */
  constructor(public httpClient: HttpClient) {
    super(httpClient)
  }
  getAll() {                              /** Получить все фильмы */

    return this.get(this.url).toPromise();
  }

  getById(id: number) {                   /** Получить фильм по id*/

    return this.get(`${this.url}/${id}`).toPromise();
  }
  putById(id: number, data){ //

    return this.put(`${this.url}/${id}`, data).toPromise();
  }

  deleteById(id: number) {

    return this.delete(`${this.url}/${id}`).toPromise();
  }

  postFilms(data) {
    return this.post(this.url, data).toPromise();
  }
}

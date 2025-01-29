import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Book, BookCreation } from './books.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  private http = inject(HttpClient);
  private apiUrl = environment.apiURL + '/api/books';

  public getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(`${this.apiUrl}`);
  }

  public getById(id: number): Observable<Book>{
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  public create(book: BookCreation){
    return this.http.post(`${this.apiUrl}`, book);
  }

  public update(id: number, book: BookCreation){
    return this.http.put(`${this.apiUrl}/${id}`, book);
  }

  public delete(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
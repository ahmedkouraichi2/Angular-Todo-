import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {TodoDto} from '../models/TodoDto';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
   private url : string =  "http://localhost:8080/todos";
  constructor(private httpClient: HttpClient ) { }


  save(todoDto: TodoDto): Observable<TodoDto> {
    return this.httpClient.post(`${this.url}/todos/create`, todoDto)
  }

  getById(todoId: number) :Observable<TodoDto> {
     return  this.httpClient.get(`${this.url}`)
  }
}

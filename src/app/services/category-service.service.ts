import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryDto } from '../models/CategoryDto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  private readonly url: string ="http://localhost:8080/api/categories";
  constructor(private httpClient: HttpClient ) { 
  }


  save() {

  }

  getById(categoryId: number){

  }

  
    getAll():Observable<CategoryDto[]>{
      return this.httpClient.get<CategoryDto[]>(`${this.url}/all`);
    }
  
    
  


  getAllByUser(idUser: number) {
   
  }

  
  getAllForToday(userId: number) {
  }

  
  delete(categoryId: number) {

  }

}

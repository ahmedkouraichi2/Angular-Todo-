import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDto } from '../models/userDto';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public loggedUser:UserDto | undefined;

  private readonly url: string ="http://localhost:8080/users";

  constructor(private httpClient: HttpClient) { }

  saveUser(userDto : UserDto):Observable <Object> {

    return this.httpClient.post(`${this.url}/users/create`, userDto)

  }



  login( userDto: UserDto){
    return userDto;
  }

  

  updateLoggedUser(userDto: UserDto) {
    this.loggedUser = userDto;
    localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
  }


  getLoggedUser() {
    if (this.loggedUser !== null && this.loggedUser !== undefined) {
      return this.loggedUser;
    }
    if (localStorage.getItem('loggedUser') !== null && localStorage.getItem('loggedUser') !== undefined) {

      return this.loggedUser;
    }
    return null;
  }







}

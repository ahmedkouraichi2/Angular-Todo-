import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { UserDto } from '../models/userDto';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userDto :UserDto = {}
  public hide = true;
  public errors = [];

  constructor(
   public router : Router,
   public userService :UserServiceService


  ){}

  ngOnInit(){

  }

  login() {
    this.userService.login(this.userDto);

      this.router.navigate(['todo-list']);
    }



    subscribe(){
     this.router.navigate(['subscribe']);
  }



}

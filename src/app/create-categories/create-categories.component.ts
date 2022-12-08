import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDto } from '../models/CategoryDto';
import { CategoryServiceService } from '../services/category-service.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent  implements OnInit{
  public errors: string [] =[];

  public categoryDto: CategoryDto = {};
   constructor(

    public categoryservice:CategoryServiceService,
    public router :Router,
    public activatedRoute :ActivatedRoute,
    public userService :UserServiceService
   ){
   }
     ngOnInit(): void {
       throw new Error('Method not implemented.');
     }


     cancel(){}



    savecategory(){}





  }












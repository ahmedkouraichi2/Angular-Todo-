import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../services/category-service.service';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { CategoryDto } from '../models/CategoryDto';

@Component({
  selector: 'app-todo-categories',
  templateUrl: './todo-categories.component.html',
  styleUrls: ['./todo-categories.component.scss']
})
export class TodoCategoriesComponent  implements OnInit{
    public categories :CategoryDto[] =[];
   constructor(
    public categoryService: CategoryServiceService,
    public router: Router,
    public userService: UserServiceService
   ){
     
   }
  ngOnInit(): void {
    this.initCategories();
  }

   initCategories() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
  }

  editCategory(id:any){
     this.router.navigate(['categories', 'new', id]);

  }

}

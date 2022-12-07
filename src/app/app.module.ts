import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppBannerComponent } from './app-banner/app-banner.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TodoCategoriesComponent } from './todo-categories/todo-categories.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TodoMenuComponent } from './todo-menu/todo-menu.component';


import { MatListModule } from '@angular/material/list';

import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    AppComponent,
    AppBannerComponent,
    CreateCategoriesComponent,
    CreateTodoComponent,
    LoginComponent,
    SignupComponent,

    TodoCategoriesComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoListComponent,
    TodoMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,

    MatListModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

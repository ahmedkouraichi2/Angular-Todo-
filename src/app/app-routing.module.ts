import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [

  {path:"todo-list",component:TodoListComponent},

  { path:"user-profile",component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

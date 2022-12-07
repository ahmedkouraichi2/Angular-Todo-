import { todoDto } from "./TodoDto";
import { UserDto } from "./userDto";

export interface CategoryDto { 

  id?: number;
  name?: string;
  description?: string;
  user?: UserDto;
  todoList?: Array<todoDto>;
}





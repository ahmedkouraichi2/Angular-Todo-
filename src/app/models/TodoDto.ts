import { CategoryDto } from "./CategoryDto";



export interface TodoDto{

  id?: number;
  title?:string;
  description?:string;
  startdate?:string;
  done?:boolean;
  favorite?: boolean;
  category?: CategoryDto;

}
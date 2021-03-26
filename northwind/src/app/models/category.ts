import { ResponseModel } from "./responseModel";

export interface Category{
    categoryName:string;
    categoryId:number;
    
}

export interface CategoryResponseModel extends ResponseModel{
    data:Category[];
}
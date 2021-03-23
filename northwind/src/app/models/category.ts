import { ResponseModel } from "./responseModel";

export interface Category{
    categoryId:number;
    categoryName:string;
}

export interface CategoryResponseModel extends ResponseModel{
    data:Category[]
}
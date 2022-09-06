import { Request, Response } from "express";
import { CreateCategoryUseCase } from "../CreateCategoryUseCase";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";



class ListCategoriesController {

    c
    constructor(private listCategoryUseCase: ListCategoriesUseCase) {
    
    }
 
     handle(request: Request, response: Response): Response {
        const all = this.listCategoryUseCase.execute();
        return response.json(all);
     }
}

export {ListCategoriesController}
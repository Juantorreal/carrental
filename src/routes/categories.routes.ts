import { request, response, Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import {CreateCategoryController} from "../modules/cars/useCases/createCategory/CreateCategoryController"
import { listCategoriesController } from "../modules/cars/useCases/createCategory/listCategories";
import multer from "multer";
import { importCategoryController } from "../modules/cars/useCases/createCategory/importCategory";


const categoriesRoutes = Router(); 

const upload = multer({
    dest: "./tmp",

}); 

const createCategoryController = new CreateCategoryController();


categoriesRoutes.post("/", createCategoryController.handle)
 
categoriesRoutes.get("/",(request, response)=> {
  return listCategoriesController.handle(request,response);
})

categoriesRoutes.post("/import", upload.single("file"), (request,response) => {
  return importCategoryController.handle(request,response);
   
})

export {categoriesRoutes}

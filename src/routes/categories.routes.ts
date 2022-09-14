import { request, response, Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import createCategoryController from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/createCategory/listCategories";
import multer from "multer";
import { importCategoryController } from "../modules/cars/useCases/createCategory/importCategory";


const categoriesRoutes = Router(); 

const upload = multer({
    dest: "./tmp",

}); 


categoriesRoutes.post("/", (request, response) => {
    console.log("reload")
   return createCategoryController().handle(request,response);
})

categoriesRoutes.get("/",(request, response)=> {
  return listCategoriesController.handle(request,response);
})

categoriesRoutes.post("/import", upload.single("file"), (request,response) => {
  return importCategoryController.handle(request,response);
   
})

export {categoriesRoutes}

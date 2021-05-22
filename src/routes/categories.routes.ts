import { Router } from "express";
import { createCategoryCrontroller } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryCrontroller.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.hanlde(request, response);
});

export { categoriesRoutes };

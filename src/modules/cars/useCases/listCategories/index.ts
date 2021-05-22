import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { LisCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUSeCase } from "./ListCategoriesUseCase";

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUSeCase(categoriesRepository);
const listCategoriesController = new LisCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController, listCategoriesUseCase };

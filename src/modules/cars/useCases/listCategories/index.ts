import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { LisCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUSeCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUSeCase(categoriesRepository);
const listCategoriesController = new LisCategoriesController(
  listCategoriesUseCase
);

export { listCategoriesController, listCategoriesUseCase };

import { Request, Response } from "express";
import { ListCategoriesUSeCase } from "./ListCategoriesUseCase";

class LisCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUSeCase) {}

  hanlde(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute();

    return response.json(all);
  }
}

export { LisCategoriesController };

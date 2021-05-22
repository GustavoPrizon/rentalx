import { Router } from "express";
import { SpecificationRespository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const speficifationsRoutes = Router();

const specificationsRepository = new SpecificationRespository();

speficifationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificarionService = new CreateSpecificationService(
    specificationsRepository
  );

  createSpecificarionService.excute({
    name,
    description,
  });

  return response.status(201).send();
});

speficifationsRoutes.get("/", (request, response) => {
  const all = specificationsRepository.list();

  return response.json(all);
});

export { speficifationsRoutes };

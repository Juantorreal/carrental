import { SpecificationsRepository } from "../../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";


const specificationsRepository = new SpecificationsRepository();
const createSpecificationUseCase =  new CreateSpecificationsUseCase(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);


export {createSpecificationController}
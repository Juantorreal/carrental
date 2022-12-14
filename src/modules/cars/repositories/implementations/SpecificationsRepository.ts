import { Specification } from "../../entities/Specification";
import { ICreateSpecificationsDTO, ISpecificationsRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository{

    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }
   

    create({description,name}: ICreateSpecificationsDTO):void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });
    }
    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name ===name);
        return specification;
    }


}

export {SpecificationsRepository}
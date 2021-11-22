import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Odontology} from "../entity/Odontology";

export class OdontologyController {

    private odontologyRepository = getRepository(Odontology);

    async all(request: Request, response: Response, next: NextFunction) {
        const aux=await this.odontologyRepository.find();
        return aux;
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.odontologyRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.odontologyRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let odontologyToRemove = await this.odontologyRepository.findOne(request.params.id);
        await this.odontologyRepository.remove(odontologyToRemove);
    }

}
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Psicology} from "../entity/Psicology";

export class PsicologyController {

    private psicologyRepository = getRepository(Psicology);

    async all(request: Request, response: Response, next: NextFunction) {
        const aux=await this.psicologyRepository.find();
        return aux;
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.psicologyRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.psicologyRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let psicologyToRemove = await this.psicologyRepository.findOne(request.params.id);
        await this.psicologyRepository.remove(psicologyToRemove);
    }

}
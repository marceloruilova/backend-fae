import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Evolution} from "../entity/Evolution";

export class EvolutionController {

    private evolutionRepository = getRepository(Evolution);

    async all(request: Request, response: Response, next: NextFunction) {
        const aux=await this.evolutionRepository.find();
        return aux;
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.evolutionRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.evolutionRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let evolutionToRemove = await this.evolutionRepository.findOne(request.params.id);
        await this.evolutionRepository.remove(evolutionToRemove);
    }

}
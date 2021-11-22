import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {InfoPrcrptn} from "../entity/InfoPrcrptn";

export class InfoPrcrptnController {

    private infoPrcrptnRepository = getRepository(InfoPrcrptn);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.infoPrcrptnRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.infoPrcrptnRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.infoPrcrptnRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let infoPrcrptnRepositoryToRemove = await this.infoPrcrptnRepository.findOne(request.params.id);
        await this.infoPrcrptnRepository.remove(infoPrcrptnRepositoryToRemove);
    }

}
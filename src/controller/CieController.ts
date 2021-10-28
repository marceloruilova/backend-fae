import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Hce} from "../entity/Hce";

export class HceController {

    
    static async all(request: Request, response: Response, next: NextFunction) {
        let hceRepository = getRepository(Hce);
        const aux=await hceRepository.find();
        return response.send(aux);
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        let hceRepository = getRepository(Hce);
        return response.send(hceRepository.findOne(request.params.id));
    }

    static async save(request: Request, response: Response, next: NextFunction) {
        let hceRepository = getRepository(Hce);
        return response.send(await hceRepository.save(request.body));
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        let hceRepository = getRepository(Hce);
        let hceToRemove = await hceRepository.findOne(request.params.id);
        await hceRepository.remove(hceToRemove);
    }

}
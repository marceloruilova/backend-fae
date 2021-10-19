import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Hce} from "../entity/Hce";

export class HceController {

    
    static async all(request: Request, response: Response, next: NextFunction) {
        let hceRepository = getRepository(Hce);
        const aux=await hceRepository.find(
                                            {relations:
                                                [
                                                "vital",
                                                "evolution",
                                                "odontology",
                                            ]});
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

    static async savevital(request: Request, response: Response, next: NextFunction) {
        let hceRepository = getRepository(Hce);
        let aux=await hceRepository.findOne(request.body.electronic_history_id,{relations:["vital"]})
        aux.vital=[request.body.vital];
        return response.send(await hceRepository.save(aux));
    }

    static async saveevol(request: Request, response: Response, next: NextFunction) {
        let hceRepository = getRepository(Hce);
        let aux=await hceRepository.findOne(request.body.electronic_history_id,{relations:["evolution"]})
        aux.evolution=[request.body.evolution];
        return response.send(await hceRepository.save(aux));
    }

    static async saveodon(request: Request, response: Response, next: NextFunction) {
        let hceRepository = getRepository(Hce);
        let aux=await hceRepository.findOne(request.body.electronic_history_id,{relations:["odontology"]})
        aux.odontology=[request.body.odontology];
        return response.send(await hceRepository.save(aux));
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        let hceRepository = getRepository(Hce);
        let hceToRemove = await hceRepository.findOne(request.params.id);
        await hceRepository.remove(hceToRemove);
    }

}
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Evolution} from "../entity/Evolution";

export class EvolutionController {

    static async all(request: Request, response: Response, next: NextFunction) {
        const evolutionRepository = getRepository(Evolution);
        const aux=await evolutionRepository.find(
            {relations:
                [
                "hce",
            ]});
        return response.send(aux);
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        let evolutionRepository = getRepository(Evolution);
        const aux=await evolutionRepository.findOne(request.params.id);
        return response.send(aux);
    }
    //get evolution by month
    static async bymonth(request: Request, response: Response, next: NextFunction) {
        const evolutionRepository = getRepository(Evolution);
        const month = request.query.month;
        const year = request.query.year;
        const aux=await evolutionRepository.find({where:{month:month,year:year},
            relations:["hce",                                                                                
            "hce.patient"
            ]});
    return response.send(aux);
}

    static async save(request: Request, response: Response, next: NextFunction) {
        const evolutionRepository = getRepository(Evolution);
        try{
            await evolutionRepository.save(request.body);
            return response.status(200).send(request.body);
        }catch(error){
            response.status(409).send(error);
            return;
        }
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        let evolutionRepository = getRepository(Evolution);
        let evolutionToRemove = await evolutionRepository.findOne(request.params.id);
        await evolutionRepository.remove(evolutionToRemove);
    }

}
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Doctor} from "../entity/Doctor";

export class DoctorController {


    static async all(request: Request, response: Response, next: NextFunction) {
        const doctorRepository = getRepository(Doctor);
        const aux= await doctorRepository.find();
        return response.send(aux);
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        const doctorRepository = getRepository(Doctor);
        const aux= await doctorRepository.findOne(request.params.id);
        return response.send(aux);
    }

    static async save(request: Request, response: Response, next: NextFunction) {
        const doctorRepository = getRepository(Doctor);
        try{
            await doctorRepository.save(request.body);
            return response.status(200).send(request.body);
        }catch(error){
            response.status(409).send(error);
            return;
        }
    }

    static async saveprescription(request: Request, response: Response, next: NextFunction) {
        let doctorRepository = getRepository(Doctor);
        let aux=await doctorRepository.findOne({where:{ci:request.body.doctor_ci},relations:["prescription"]})
        aux.prescription=[...aux.prescription,request.body.prescription];
        return response.send(await doctorRepository.save(aux));
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        const doctorRepository = getRepository(Doctor);
        let doctorToRemove = await doctorRepository.findOne(request.params.id);
        await doctorRepository.remove(doctorToRemove);
    }

}
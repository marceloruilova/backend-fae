import {getRepository,LessThan} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        const aux=await this.userRepository.find(
                                            {relations:
                                            ["historialelectronico",
                                            "historialelectronico.vitals",
                                            "historialelectronico.evolution",
                                            "historialelectronico.odontology",
                                            "historialelectronico.evolution.prescription",
                                            "historialelectronico.odontology.prescription",
                                            "historialelectronico.evolution.prescription.prescribing_doctor",
                                            "historialelectronico.odontology.prescription.prescribing_doctor",
                                            ]});
        return aux;
    }
    
    //get users by date
    async bydate(request: Request, response: Response, next: NextFunction) {
        const timeElapsed = new Date();
        const today = timeElapsed.toISOString().substring(0,10);
        const aux=await this.userRepository.find({where:{appointment_date:today}});
        return aux;
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id,
                                        {relations:
                                        ["historialelectronico",
                                        "historialelectronico.vitals",
                                        "historialelectronico.evolution",
                                        "historialelectronico.odontology",
                                        "historialelectronico.evolution.prescription",
                                        "historialelectronico.odontology.prescription",
                                        "historialelectronico.evolution.prescription.prescribing_doctor",
                                        "historialelectronico.odontology.prescription.prescribing_doctor",
                                        ]});
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}
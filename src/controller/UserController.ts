import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import {Hce} from "../entity/Hce";

export class UserController {

    private userRepository = getRepository(User);
    private hceRepository = getRepository(Hce);

    async all(request: Request, response: Response, next: NextFunction) {
        const aux=await this.userRepository.find(
                                            {relations:
                                            ["historialelectronico",
                                            "historialelectronico.vitals",
                                            "historialelectronico.evolution",
                                            "historialelectronico.evolution.prescribing_doctor",]});
        return aux;
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}
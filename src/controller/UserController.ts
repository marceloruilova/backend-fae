import {getRepository,LessThan} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import { validate } from "class-validator";

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        const aux=await this.userRepository.find({select:["id","username","role"]});
        return aux;
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOneOrFail(request.params.id,{select:["id","username","role"]});
    }
//Add edit
    async save(request: Request, response: Response, next: NextFunction) {
        let {username,password,role}=request.body;
        let user = new User();
        user.username=username;
        user.password=password;
        user.role=role;

        const errors = await validate(user);
        if (errors.length > 0) {
            response.status(400).send(errors);
            return;
        }
          //Hash the password, to securely store on DB
          user.hashPassword();
          //Try to save. If fails, the username is already in use
          try {
            await this.userRepository.save(user);
          } catch (e) {
            response.status(409).send("username already in use");
            return;
          }
          //If all ok, send 201 response
          response.status(201).send("User created");
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove:User;
        try{
            userToRemove = await this.userRepository.findOneOrFail(request.params.id);
        }catch(error){
            response.status(404).send("User not found");
            return;
        }
        await this.userRepository.remove(userToRemove);

        //After all send a 204 (no content, but accepted) response
        response.status(204).send();
    }

}
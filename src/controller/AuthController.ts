import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import * as jwt from "jsonwebtoken";

import {User} from "../entity/User";
import config from "../config/config"

export class AuthController {

    private userRepository = getRepository(User);

    async login(request: Request, response: Response, next: NextFunction) {
        let {username,password}=request.body;
        if(!(username&&password)){
            response.status(400).send();
        }

        let user:User;
        try {
            user = await this.userRepository.findOneOrFail({ where: { username } });
          } catch (error) {
            response.status(401).send();
          }
        //Check if encrypted password match
        if (!user.checkIfUnencryptedPasswordIsValid(password)) {
            response.status(401).send();
            return;
        }

        //Sing JWT, valid for 1 hour
        const token = jwt.sign(
            { userId: user.id, username: user.username },
            config.jwtSecret,
            { expiresIn: "1h" }
        );

        //Send the jwt in the response
        response.send(token);
    }

}
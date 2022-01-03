import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import * as jwt from "jsonwebtoken";
import { validate } from "class-validator";
import {User} from "../entity/User";
import config from "../config/config"

export class AuthController {

    static async login(request: Request, response: Response, next: NextFunction) {
        
        const userRepository = getRepository(User);
        let {username,password}=request.body;
        if(!(username&&password)){
            response.status(400).send();
        }

        let user:User;
        try {
            user = await userRepository.findOneOrFail({ where: { username } });
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
        response.send({user,jwt_token:token});
    }
    static async register(req: Request, res: Response, next: NextFunction) {
         //Get parameters from the body
  let { username, password, email, role } = req.body;
  let user = new User();
  user.username = username;
  user.password = password;
  user.email = email;
  user.role = role;
  //Validade if the parameters are ok
  const errors = await validate(user);
  if (errors.length > 0) {
    res.status(400).send(errors);
    return;
  }

  //Hash the password, to securely store on DB
  user.hashPassword();

  //Try to save. If fails, the username is already in use
  const userRepository = getRepository(User);
  try {
    await userRepository.save(user);
  } catch (e) {
    res.status(409).send("username already in use");
    return;
  }

  //If all ok, send 201 response
  return res.status(201).send("User created");
}
    static changePassword = async (req: Request, res: Response) => {
        //Get ID from JWT
        const id = res.locals.jwtPayload.userId;
    
        //Get parameters from the body
        const { oldPassword, newPassword } = req.body;
        if (!(oldPassword && newPassword)) {
          res.status(400).send();
        }
    
        //Get user from the database
        const userRepository = getRepository(User);
        let user: User;
        try {
          user = await userRepository.findOneOrFail(id);
        } catch (id) {
          res.status(401).send();
        }
    
        //Check if old password matchs
        if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
          res.status(401).send();
          return;
        }
    
        //Validate de model (password lenght)
        user.password = newPassword;
        const errors = await validate(user);
        if (errors.length > 0) {
          res.status(400).send(errors);
          return;
        }
        //Hash the new password and save
        user.hashPassword();
        userRepository.save(user);
    
        res.status(204).send();
      };
}
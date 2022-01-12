import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Inventory} from "../entity/Inventory";

export class InventoryController {


    static async all(request: Request, response: Response, next: NextFunction) {
        const inventoryRepository = getRepository(Inventory);
        const aux=await inventoryRepository.find();
        return response.send(aux);
    }

    static async one(request: Request, response: Response, next: NextFunction) {
        let inventoryRepository = getRepository(Inventory);
        return response.send(inventoryRepository.findOne(request.params.id));
    }

    static async save(request: Request, response: Response, next: NextFunction) {
        const inventoryRepository = getRepository(Inventory);
        try{
            await inventoryRepository.save(request.body.inventory);
            return response.status(200).send(request.body.inventory);
        }catch(error){
            response.status(409).send(error);
            return;
        }
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        let inventoryRepository = getRepository(Inventory);
        let inventoryToRemove:Inventory;
        try{
            inventoryToRemove = await inventoryRepository.findOne(request.params.id);
        }catch(error){
            console.log(error)
            response.status(404).send("Medicine not found");
            return;
        }
        await inventoryRepository.remove(inventoryToRemove);
        response.status(204).send();

    }

}
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Inventory} from "../entity/Inventory";

export class InventoryController {

    private inventoryRepository = getRepository(Inventory);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.inventoryRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.inventoryRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.inventoryRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let inventoryToRemove = await this.inventoryRepository.findOne(request.params.id);
        await this.inventoryRepository.remove(inventoryToRemove);
    }

}
import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";

export class BurgerController extends BaseController {
	constructor() {
        console.log('on')
		super("api/burgers");
		this.router
			.get("", this.getBurgers)
			.post("", this.createBurger)
			.delete("/:id", this.removeBurger);
	}

    getBurgers(request, response, next){
        try {
            response.send(burgerService.getBurgers())
        } 
        catch (error) {
            next(error)
        }
    }
    createBurger(request, response, next){
        try {
            const newBurger = request.body
            response.send(burgerService.createBurger(newBurger))
        } 
        catch (error) {
            next(error)
        }
    }
    removeBurger(request, response, next){
        try {
            response.send(burgerService.removeBurger(request.params.id))
        } 
        catch (error) {
            next(error)
        }
    }
}

import { FakeDb } from "../../FakeDB.js";
import { Burger } from "../models/Burger.js";

class BurgerService {
	getBurgers() {
        return FakeDb.burgers
    }
	createBurger(newBurger) {
        const burg = (new Burger(newBurger))
        FakeDb.burgers.push(burg)
        return burg
    }
	removeBurger(id) {
        const index = FakeDb.burgers.findIndex(burger => burger.id == id)
        if(!FakeDb.burgers[index]) throw new Error(`Could not remove, no burger there`)
        FakeDb.burgers.splice(index, 1)
        return `Burger Removed`
    }
}

export const burgerService = new BurgerService();

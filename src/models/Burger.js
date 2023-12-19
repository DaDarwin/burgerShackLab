import { FakeDb } from "../../FakeDB.js"

export class Burger {
    constructor(data) {
        this.id = Math.random()
        this.name = data.name
        this.price = data.price
    }
}
import { Inventory } from "./inventory";
import { Recipe } from "./recipe";

export class LemonadeStand {
    cash: number;
    inventory: Inventory;
    recipe: Recipe;

    constructor(startingCash: number) {
        this.cash = startingCash;
        this.inventory = new Inventory();
        this.recipe = new Recipe(0.2, 0.1, 0.1);
    }

buySupply(
    supply: "cups" | "ice" | "lemons" | "sugar",
    quantity: number,
    pricePerUnit: number
): void {
    const totalCost = quantity * pricePerUnit;

    if (totalCost > this.cash) {
        console.log("Not enough cash.");
        return;
    }

    this.cash -= totalCost;
    this.inventory[supply] += quantity;
}


}


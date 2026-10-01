import { Inventory } from "./inventory";
import { Recipe } from "./recipe";

export class LemonadeStand {
    cash: number;
    inventory: Inventory;
    recipe: Recipe;

    constructor(startingCash: number) {
        this.cash = startingCash;
        this.inventory = new Inventory();
        this.recipe = new Recipe(2, 1, 1);
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

sellCup(price: number): boolean {
    if (
        this.inventory.cups < 1 ||
        this.inventory.ice < this.recipe.icePerCup ||
        this.inventory.lemons < this.recipe.lemonsPerCup ||
        this.inventory.sugar < this.recipe.sugarPerCup
    ) {
        return false;
    }

    this.inventory.cups -= 1;
    this.inventory.ice -= this.recipe.icePerCup;
    this.inventory.lemons -= this.recipe.lemonsPerCup;
    this.inventory.sugar -= this.recipe.sugarPerCup;

    this.cash += price;

    return true;
}

sellCups(quantity: number, pricePerCup: number): number {
    let sold = 0;

    for (let i = 0; i < quantity; i++) {
        const success = this.sellCup(pricePerCup);

        if (!success) {
            break;
        }

        sold++;
    }

    return sold;
}


}


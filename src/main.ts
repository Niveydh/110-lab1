import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { LemonadeStand } from "./LemonadeStand";
import { Weather, getDemand } from "./Weather";
import { generatePrices } from "./Prices";

async function main(): Promise<void> {
    const rl = readline.createInterface({
        input,
        output
    });

    const stand = new LemonadeStand(20);

    console.log("===== LEMONADE RECIPE =====");
    console.log("1 cup");
    console.log(`${stand.recipe.icePerCup} ice`);
    console.log(`${stand.recipe.lemonsPerCup} lemon(s)`);
    console.log(`${stand.recipe.sugarPerCup} sugar`);

    for (let day = 1; day <= 3; day++) {
        console.log(`\n===== DAY ${day} =====`);

        const weatherOptions: Weather[] = ["cold", "warm", "hot"];
        const weather =
            weatherOptions[Math.floor(Math.random() * weatherOptions.length)];

        const demand = getDemand(weather);

        const prices = generatePrices();

        console.log(`Weather: ${weather}`);
        console.log(`Current balance: $${stand.cash.toFixed(2)}`);

        console.log("\nCurrent supply prices:");
        console.log(`Cups: $${prices.cups.toFixed(2)} each`);
        console.log(`Ice: $${prices.ice.toFixed(2)} each`);
        console.log(`Lemons: $${prices.lemons.toFixed(2)} each`);
        console.log(`Sugar: $${prices.sugar.toFixed(2)} each`);
        console.log();

        const cups = Number(
            await rl.question("How many cups would you like to buy? ")
        );

        stand.buySupply("cups", cups, prices.cups);
        console.log(`Balance: $${stand.cash.toFixed(2)}\n`);

        const ice = Number(
            await rl.question("How much ice would you like to buy? ")
        );

        stand.buySupply("ice", ice, prices.ice);
        console.log(`Balance: $${stand.cash.toFixed(2)}\n`);

        const lemons = Number(
            await rl.question("How many lemons would you like to buy? ")
        );

        stand.buySupply("lemons", lemons, prices.lemons);
        console.log(`Balance: $${stand.cash.toFixed(2)}\n`);

        const sugar = Number(
            await rl.question("How much sugar would you like to buy? ")
        );

        stand.buySupply("sugar", sugar, prices.sugar);
        console.log(`Balance: $${stand.cash.toFixed(2)}\n`);

        const sold = stand.sellCups(demand, 2);

        console.log("\nEnd of day results:");
        console.log(`Demand: ${demand}`);
        console.log(`Cups sold: ${sold}`);

        console.log("\nInventory remaining:");
        console.log(stand.inventory);

        console.log(`Cash balance: $${stand.cash.toFixed(2)}`);
    }

    rl.close();
}

main();
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { LemonadeStand } from "./LemonadeStand";

async function main(): Promise<void> {
    const rl = readline.createInterface({
        input,
        output
    });

    const stand = new LemonadeStand(20);

    const cupPrice = 0.25;
    const icePrice = 0.05;
    const lemonPrice = 0.50;
    const sugarPrice = 0.10;

    console.log(`Current balance: $${stand.cash.toFixed(2)}`);
    console.log("Current supply prices:");
    console.log(`Cups: $${cupPrice.toFixed(2)} each`);
    console.log(`Ice: $${icePrice.toFixed(2)} each`);
    console.log(`Lemons: $${lemonPrice.toFixed(2)} each`);
    console.log(`Sugar: $${sugarPrice.toFixed(2)} each`);
    console.log();

    const cups = Number(
        await rl.question("How many cups would you like to buy? ")
    );
    stand.buySupply("cups", cups, cupPrice);
    console.log(`Balance: $${stand.cash.toFixed(2)}\n`);

    const ice = Number(
        await rl.question("How much ice would you like to buy? ")
    );
    stand.buySupply("ice", ice, icePrice);
    console.log(`Balance: $${stand.cash.toFixed(2)}\n`);

    const lemons = Number(
        await rl.question("How many lemons would you like to buy? ")
    );
    stand.buySupply("lemons", lemons, lemonPrice);
    console.log(`Balance: $${stand.cash.toFixed(2)}\n`);

    const sugar = Number(
        await rl.question("How much sugar would you like to buy? ")
    );
    stand.buySupply("sugar", sugar, sugarPrice);
    console.log(`Balance: $${stand.cash.toFixed(2)}\n`);

    console.log("Final inventory:");
    console.log(stand.inventory);

    console.log(`Final balance: $${stand.cash.toFixed(2)}`);

    rl.close();
}

main();
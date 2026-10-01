//import * as readline from 'readline/promises';

import { LemonadeStand } from "./LemonadeStand";

function main(): void {
    const stand = new LemonadeStand(20);

    stand.buySupply("cups", 10, 0.25);
    stand.buySupply("ice", 20, 0.05);
    stand.buySupply("lemons", 10, 0.5);
    stand.buySupply("sugar", 10, 0.1);

    const sold = stand.sellCups(5, 2);

    console.log(`Cups sold: ${sold}`);
    console.log("Inventory:", stand.inventory);
    console.log(`Cash: $${stand.cash}`);
}


main();
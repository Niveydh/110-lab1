//import * as readline from 'readline/promises';

import { LemonadeStand } from "./LemonadeStand";

function main(): void {
    const stand = new LemonadeStand(20);

stand.buySupply("cups", 10, 0.25);
stand.buySupply("lemons", 2, 0.25);
stand.buySupply("ice", 2, 0.25);
stand.buySupply("sugar", 2, 0.25);

console.log(stand.inventory.cups);
console.log(stand.inventory.lemons);
console.log(stand.inventory.ice);
console.log(stand.inventory.sugar);
console.log(stand.cash);
}


main();
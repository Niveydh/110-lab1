//import * as readline from 'readline/promises';

import { LemonadeStand } from "./LemonadeStand";
import { Weather, getDemand } from "./Weather";

function main(): void {
    const stand = new LemonadeStand(20);

    stand.buySupply("cups", 10, 0.25);
    stand.buySupply("ice", 20, 0.05);
    stand.buySupply("lemons", 10, 0.5);
    stand.buySupply("sugar", 10, 0.1);

    const sold = stand.sellCups(5, 2);


    const weather: Weather = "hot";
    const demand = getDemand(weather);

    console.log(`Weather: ${weather}`);
    console.log(`Demand: ${demand}`);

  
}


main();
export class Recipe {
    icePerCup: number;
    lemonsPerCup: number;
    sugarPerCup: number;

    constructor(
        icePerCup: number,
        lemonsPerCup: number,
        sugarPerCup: number
    ) {
        this.icePerCup = icePerCup;
        this.lemonsPerCup = lemonsPerCup;
        this.sugarPerCup = sugarPerCup;
    }
}
export type SupplyPrices = {
    cups: number;
    ice: number;
    lemons: number;
    sugar: number;
};

export function generatePrices(): SupplyPrices {
    return {
        cups: 0.20 + Math.random() * 0.10,
        ice: 0.03 + Math.random() * 0.04,
        lemons: 0.40 + Math.random() * 0.20,
        sugar: 0.08 + Math.random() * 0.06
    };
}
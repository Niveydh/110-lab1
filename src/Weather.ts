export type Weather = "cold" | "warm" | "hot";

export function getDemand(weather: Weather): number {
    if (weather === "cold") {
        return 3;
    } else if (weather === "warm") {
        return 6;
    } else {
        return 10;
    }
}
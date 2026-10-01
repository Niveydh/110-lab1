import * as readline from 'readline/promises';

async function main(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    try {
        const answer = await rl.question('Hello! Welcome to the game, enter your name: ', {
            signal: AbortSignal.timeout(10_000)
        });

        console.log(`You answered: ${answer}`);
    } catch (err) {
        console.log('No answer received or the question timed out.');
    } finally {
        rl.close();
    }

}
main();
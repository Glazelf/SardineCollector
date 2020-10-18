exports.run = async (client, message) => {
    // Import globals
    let globalVars = require('../../events/ready');
    try {
        if (message.author.id !== client.config.ownerID) return message.reply(globalVars.lackPerms);

        const conn = require("../../switch/index");
        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
        let input = message.content.split(` `, 2);
        let count = input[1];
        if (!count) count = 1;
        if (isNaN(count)) return message.channel.send(`> Provided variable isn't a number, ${message.author}.`);
        if (count < 1) return message.channel.send(`> Provided number needs to be above 0, ${message.author}.`);

        // This loop assumes all the top 4 units in your base panel are all humans capable of lifting and that all enemies die due to the geo chain.

        // Input loop for 1-2
        while (count > 0) {
            await sleep(500);

            // Enter level
            console.log("Entering level");
            conn.write("click A \r\n");
            // Await level loading
            await sleep(4000);
            // Select Base Panel
            conn.write("click A \r\n");
            await sleep(500);
            // Place bottom unit
            conn.write("click DUP \r\n");
            await sleep(500);
            conn.write("click A \r\n");
            await sleep(500);
            // Select Move
            console.log("Moving unit 1");
            conn.write("click A \r\n");
            await sleep(500);
            // Move to blue Geo Block
            conn.write("click DLEFT \r\n");
            await sleep(500);
            conn.write("click DLEFT \r\n");
            await sleep(500);
            conn.write("click DLEFT \r\n");
            await sleep(500);
            conn.write("click DLEFT \r\n");
            await sleep(500);
            // Confirm move
            conn.write("click A \r\n");
            await sleep(500);
            // Select character
            console.log("Moving first Geo Block");
            conn.write("click A \r\n");
            await sleep(500);
            // Move down to Lift
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            // Press Lift
            conn.write("click A \r\n");
            await sleep(500);
            // Select Geo Block
            conn.write("click A \r\n");
            await sleep(500);
            // Select Character
            conn.write("click A \r\n");
            await sleep(500);
            // Move down to Throw
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            // Select Throw
            conn.write("click A \r\n");
            await sleep(500);
            // Move to target space
            conn.write("click DRIGHT \r\n");
            await sleep(500);
            conn.write("click DRIGHT \r\n");
            await sleep(500);
            conn.write("click DRIGHT \r\n");
            await sleep(500);
            // Confirm Throw
            conn.write("click A \r\n");
            await sleep(1500);
            // Move to base panel
            conn.write("click DRIGHT \r\n");
            await sleep(500);
            // Select base panel
            conn.write("click A \r\n");
            await sleep(500);
            // Select character 2
            conn.write("click A \r\n");
            await sleep(500);
            // Select Move
            console.log("Moving unit 2");
            conn.write("click A \r\n");
            await sleep(500);
            // Move
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DLEFT \r\n");
            await sleep(500);
            conn.write("click A \r\n");
            await sleep(500);
            // Select character
            console.log("Throwing Geo Block");
            conn.write("click A \r\n");
            await sleep(500);
            // Move down to Lift
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            // Press Lift
            conn.write("click A \r\n");
            await sleep(500);
            // Select Geo Block
            conn.write("click A \r\n");
            await sleep(500);
            // Select Character
            conn.write("click A \r\n");
            await sleep(500);
            // Move down to Throw
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            // Select Throw
            conn.write("click A \r\n");
            await sleep(1500);
            // Move to target space
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            // Confirm Throw
            conn.write("click A \r\n");
            await sleep(500);
            // Move back to base panel
            conn.write("click DRIGHT \r\n");
            await sleep(500);
            conn.write("click DUP \r\n");
            await sleep(500);
            conn.write("click DUP \r\n");
            await sleep(500);
            conn.write("click DUP \r\n");
            await sleep(500);
            // Select base panel
            conn.write("click A \r\n");
            await sleep(500);
            // Select unit 3
            console.log("Moving unit 3");
            conn.write("click A \r\n");
            await sleep(500);
            // Select Move
            conn.write("click A \r\n");
            await sleep(500);
            // Move
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DLEFT \r\n");
            await sleep(500);
            conn.write("click DLEFT \r\n");
            await sleep(500);
            conn.write("click A \r\n");
            await sleep(500);
            // Select unit
            console.log("Throwing Geo Block");
            conn.write("click A \r\n");
            await sleep(500);
            // Move down to Lift
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            // Press Lift
            conn.write("click A \r\n");
            await sleep(500);
            // Select Geo Block
            conn.write("click A \r\n");
            await sleep(500);
            // Select Character
            conn.write("click A \r\n");
            await sleep(500);
            // Move down to Throw
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            // Select Throw
            conn.write("click A \r\n");
            await sleep(500);
            // Move to target space
            conn.write("click DRIGHT \r\n");
            await sleep(500);
            conn.write("click DRIGHT \r\n");
            await sleep(500);
            // Confirm Throw
            conn.write("click A \r\n");
            await sleep(1500);
            // Move back to base panel
            conn.write("click DLEFT \r\n");
            await sleep(500);
            conn.write("click DUP \r\n");
            await sleep(500);
            conn.write("click DUP \r\n");
            await sleep(500);
            conn.write("click DUP \r\n");
            await sleep(500);
            // Select final unit
            console.log("Moving unit 4");
            conn.write("click A \r\n");
            await sleep(500);
            conn.write("click A \r\n");
            await sleep(500);
            // Move down
            conn.write("click A \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click DDOWN \r\n");
            await sleep(500);
            // Select unit
            conn.write("click A \r\n");
            await sleep(500);
            conn.write("click A \r\n");
            await sleep(500);
            // Attack
            console.log("Attacking Geo Block");
            conn.write("click DDOWN \r\n");
            await sleep(500);
            conn.write("click A \r\n");
            await sleep(500);
            conn.write("click A \r\n");
            await sleep(500);
            // Press X to enter menu
            conn.write("click X \r\n");
            await sleep(500);
            // Move down to End Turn
            conn.write("click DDOWN \r\n");
            await sleep(500);
            // End Turn
            conn.write("click A \r\n");
            // Look at these beautiful animations and await enemy turn
            console.log("Witnessing a 40+ second geo chain");
            await sleep(50000);

            // Press A to return to menu
            console.log("Returning to level select");
            conn.write("click A \r\n");
            await sleep(2500);
            count -= 1;

            if (count > 0) {
                console.log(`Restarting loop, ${count} to go!`);
            } else {
                console.log("Ending loop");
                message.channel.send(`> Finished looping 2-2, ${message.author}.`);
            };
        };

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};

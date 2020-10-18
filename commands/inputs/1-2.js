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

        // Input loop for 1-2
        while (count > 0) {
            message.channel.send(`> Starting to play 1-2, ${count} iterations left, ${message.author}.`);
            await sleep(500);
            // Enter level
            console.log("Entering level");
            conn.write("click A \r\n");
            // Await level loading
            await sleep(4000);
            // Select Base Panel
            conn.write("click A \r\n");
            await sleep(500);
            // Place the top unit
            conn.write("click A \r\n");
            await sleep(500);
            // Select Move
            console.log("Moving unit");
            conn.write("click A \r\n");
            await sleep(500);
            // Move to first enemy
            conn.write("click DRIGHT \r\n");
            await sleep(500);
            conn.write("click DRIGHT \r\n");
            await sleep(500);
            conn.write("click DRIGHT \r\n");
            await sleep(500);
            // Confirm move
            conn.write("click A \r\n");
            await sleep(500);

            // Select your unit
            console.log("Engaging in combat turn 1");
            conn.write("click A \r\n");
            await sleep(500);
            // Move down to Attack
            conn.write("click DDOWN \r\n");
            await sleep(500);
            // Select Attack
            conn.write("click A \r\n");
            await sleep(500);
            // Select enemy
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
            await sleep(15000);

            // Select your unit
            console.log("Engaging in combat turn 2");
            conn.write("click A \r\n");
            await sleep(500);
            // Move down to Attack
            conn.write("click DDOWN \r\n");
            await sleep(500);
            // Select Attack
            conn.write("click A \r\n");
            await sleep(500);
            // Select enemy
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
            await sleep(20000);

            // Press A to return to menu
            console.log("Returning to level select");
            conn.write("click A \r\n");
            await sleep(2500);
            count -= 1;

            if (count > 0) {
                console.log("Restarting loop");
            } else {
                console.log("Ending loop");
            };
        };

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};

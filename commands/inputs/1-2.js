exports.run = async (client, message) => {
    // Import globals
    let globalVars = require('../../events/ready');
    try {
        if (message.author.id !== client.config.ownerID) return message.reply(globalVars.lackPerms);

        const conn = require("../../switch/index");
        const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
        let input = message.content.split(` `, 2);
        let count = input[1];
        if(!count) count = 1;
        if (isNaN(count)) return message.channel.send(`> Provided variable isn't a number, ${message.author}.`);
        if (count < 1) return message.channel.send(`> Provided number needs to be above 0, ${message.author}.`);

        // Input loop for 1-2
        while (count > 0) {
            await sleep(500);
            // Enter level
            conn.write("click A \r\n");
            await sleep(3000);
            // Select Base Panel
            conn.write("click A \r\n");
            await sleep(3000)
            console.log("slept")
            count -= 1;
        };

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};

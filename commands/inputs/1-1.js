exports.run = (client, message) => {
    // Import globals
    let globalVars = require('../../events/ready');
    try {
        if (message.author.id !== client.config.ownerID) return message.reply(globalVars.lackPerms);

        const conn = require("../../switch/index");
        let input = message.content.split(` `, 2);
        let count = input[1];
        if (isNaN(count)) return message.channel.send(`> Provided variable isn't a number, ${message.author}.`);
        if (count < 1) return message.channel.send(`> Provided number needs to be above 0, ${message.author}.`);

        while (count > 0) {
            // Input loop for 1-1
            console.log("Sardines!")
            if (globalVars == false) return message.channel.send(`> Loop ended, ${message.author}.`);
            count -= 1;
        };

    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};

exports.run = (client, message) => {
    // Import globals
    let globalVars = require('../../events/ready');
    try {
        if (message.author.id !== client.config.ownerID) return message.reply(globalVars.lackPerms);

        const input = message.content.split(` `, 2);
        if (!input[1]) return message.channel.send(`> Loops are currently set to \`${globalVars.allowLoops}\`, ${message.author}.`);
        console.log(input[1])
        if (input[1] == "false") {
            globalVars.allowLoops = false;
            console.log("Loop disabled.");
            return message.channel.send(`> Loops set to \`false\`, ${message.author}.`);
        } else if (input[1] == "true") {
            globalVars.allowLoops = true;
            console.log("Loop enabled.");
            return message.channel.send(`> Loops set to \`true\`, ${message.author}.`);
        };


    } catch (e) {
        // log error
        const logger = require('../../util/logger');

        logger(e, client, message);
    };
};

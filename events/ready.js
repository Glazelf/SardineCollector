module.exports = async (client) => {
  try {
    console.log(`Loaded a total of ${client.commands.size} commands!`);
    console.log(`Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
    console.log(`Connected as ${client.user.tag}.`);

    // Set bot status
    client.user.setPresence({ activity: { name: 'with sardines!' }, status: 'idle' });

    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
      console.log(' - ' + guild.name);
    });

  } catch (e) {
    // log error
    console.log(e);
  };
};

module.exports.allowLoops = true;
module.exports.embedColor = "#49C1DD";
module.exports.lackPerms = `you do not have the required permissions to do this.`;
module.exports.prefix = "!";
module.exports.totalCommands = 0;

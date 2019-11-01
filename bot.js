const Discord = require("discord.js");
const bot = new Discord.Client();
 
bot.on("ready", () => {
  console.log("I am ready!");
});
 
bot.on("message", (message) => {
  let prefix = "l-"
  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send(bot.ping[0]);
  }
});
 
client.login(process.env.token);

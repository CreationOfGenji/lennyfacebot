const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});
 
client.login("NjM5NTY5OTQ1MjE0MzIwNjcw.XbtPQQ.MI13lwnaOuBv7Y4RkMbtHj2QQ28");

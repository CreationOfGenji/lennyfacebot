const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
 
bot.on("ready", () => {
  console.log("I am ready!");
});
 
bot.on("message", (message) => {
  let prefix = "l-"
  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send(`BOO! Did i scare you? The bot's current ping is ${bot.ping}ms`);
  }

  if(message.content.startsWith(`${prefix}lennytime`)){
    let folder = "./trainer"
    fs.exists(`${folder}/${message.author.id}.json`, exists => {
      if(exists){
        message.channel.send("hello there!")
      }
      else {
        message.channel.send("Welcome to ze lenny bot! what lenny do you want to pick!\n1. ( ͡° ͜ʖ ͡°)\n2. ( ° ͜ʖ °)\ntype the number of lenny you want! you have 15 seconds to reply! (aka 1, 2 ect)")
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 15000 });
        collector.on("collect", message => {
          if(message.content === "1"){
           let lenny = {
        lenny: "( ͡° ͜ʖ ͡°)"
        }
        let json = JSON.stringify(lenny)
        fs.writeFileSync(`${folder}/${message.author.id}.json`, json)
        message.channel.send("done! hopefully")
        collector.stop();  
          } else if(message.content === "2") {
            let lenny = {
              lenny: "( ° ͜ʖ °)"
              }
              let json = JSON.stringify(lenny)
              fs.writeFileSync(`${folder}/${message.author.id}.json`, json)
              message.channel.send("done! hopefully")
              collector.stop();         
          }
        })
        collector.on("end", (collected,reason) => {
          if(reason == "time"){
            message.reply(` you failed to reply in time!`)
          }
        })
      }
    })
  }
});
 
bot.login(process.env.token);

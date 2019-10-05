const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
// Developer Note: This is the simplist thing you can do for this project.

client.on("message", (message) => {
  if (message.content.startsWith("!ping")) {
    message.channel.send("pong!");
  }
});

// Developer Note: The Message will be updated SOON.

client.on("message", (message) => {
  if (message.content.startsWith("!help")) {
   message.channel.send("Well, I just got on here! But I'm sure you can read my Bio Soon, Right?") 
  }
});

// Developer Note: This is broken and does not work ATM.

client.on('message', message => {
  if (message.content === '!avatar') {
    message.reply(message.author.avatarURL);
  }
});

//Developer Note: NULL


 // REMIX NOTE: Your Bot's Token. Available on https://discordapp.com/developers/applications/me
// TIP: Put it in the .env file.
client.login("process.env.TOKEN");

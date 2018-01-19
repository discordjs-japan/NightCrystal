const Discord = require('discord.js');
const Client = new Discord.Client();
const config = require("./config.json");
const prefix = "-"

Client.on("ready", () => {
  Client.user.setGame('@NightCrystal|-help');
  Client.user.setStatus('online');
  console.log("online");
});

Client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command === "help") {
    const embed = new Discord.RichEmbed()
    .setColor(0x0000FF)
    .setAuthor("HELP", "https://goo.gl/ENFFtn")
    .addField("-help: ", "コマンドリストを表示します。")
    .addField("-ping: ", "通信速度を表示します。")
    message.channel.send(embed);
  } else
  if (command === "ping") {
    message.channel.sendMessage(new Date().getTime() - message.createdTimestamp + "ms");
  }
});

Client.login(config.token);

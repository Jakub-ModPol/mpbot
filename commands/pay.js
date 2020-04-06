const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('mp!'))return;  

  let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

  let embed1 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Označ někoho komu chceš poslat peníze.`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Specifikuj částku, kterou chceš zaslat.`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Nemůžeš zaslat negativní počet peněz.`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Nemáš tolik peněz.`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }
  let embed6 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Zadej důvod transakce.`);

  if (!args[2]) {
    return message.channel.send(embed6)
}

  let embed5 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Úspěšně jsi poslal, ${user.user.username}, ${args[1]}Kč`)

  message.channel.send(embed5)
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])

}

module.exports.help = {
  name:"pay",
  aliases: ["p"]
}
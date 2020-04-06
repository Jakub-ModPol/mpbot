const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('mp!'))return;  

  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Vybral jsi všechny peníze ze svého bankovního účtu.`);
  message.channel.send(embed5)
  
  } else {

  let embed2 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Specifikuj částku, kterou chceš vybrat.`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed3 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Nemůžeš vybrat negativní částku.`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Tolik peněz v ModPol bance nemáš.`);

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Úspěšně jsi vybral ${args[0]}Kč ze svého bankovního účtu.`);

  message.channel.send(embed5)
  db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
  db.add(`money_${message.guild.id}_${user.id}`, args[0])
  }
}


module.exports.help = {
  name:"vybrat",
  aliases: ["vy"]
}
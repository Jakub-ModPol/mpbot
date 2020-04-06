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
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)

    let embedbank = new MessageEmbed()
    .setColor('#FFFFFF')
    .setDescription("Nemáš v peněžence žádné peníze, které bys mohl vložit do ModPol banky.")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`bank_${message.guild.id}_${user.id}`, money)
    db.subtract(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Všechny tvé peníze  z peněženky, jsi vložil do ModPol banky.`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Napiš jakou částku chceš vložit do ModPol banky.`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Nemůžeš vložit negativní počet peněz.`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Nemáš u sebe tolik peněz.`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Vklad byl úspěšný! Vložil jsi ${args[0]}Kč do tvé ModPol banky.`);

  message.channel.send(embed5)
  db.add(`bank_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`money_${message.guild.id}_${user.id}`, args[0])
  }
}
module.exports.help = {
  name:"vklad",
  aliases: ["vk"]
}
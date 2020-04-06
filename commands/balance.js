const Discord = require("discord.js");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args, utils) => {
  if(!message.content.startsWith('mp!'))return;  

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**Zůstatek hráče ${user}:**\n\nPeněženka: ${bal}\nModPol Banka: ${bank}Kč`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"mepenize",
  aliases: ["ucet"]
}
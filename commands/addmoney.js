const Discord = require("discord.js");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js");

exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('mp!'))return;  
  if(!message.member.roles.cache.some(r => r.name === "Admin")) return message.channel.send("Nejsi admin. *Sad*")

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Přidáno: ${args[1]}Kč\n\nZůstatek: ${bal}Kč`);
    message.channel.send(moneyEmbed)

};

module.exports.help = {
  name:"add",
  aliases: ["am"]
}

const Discord = require('discord.js')
const db = require('quick.db')
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.content.startsWith('mp!'))return;  

    let user = message.author;
    if(!message.member.roles.cache.some(r => r.name === "Nováček")) { return message.channel.send("Na tyto peníze nemáš právo.")
}
    let timeout = 86400000;
    let amount = 100000;
  
    let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);
  
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));
    
      let timeEmbed = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`Tento finanční obnos sis již vyzvedl!`);
      message.channel.send(timeEmbed)
    } else {
      let moneyEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Super. Vyzvedl sis své první peníze: ${amount}Kč`);
    message.channel.send(moneyEmbed)
    db.add(`money_${message.guild.id}_${user.id}`, amount)
    db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
  
  
    }

}

module.exports.help = {
    name:"novacek",
    aliases: ["start"]
  }
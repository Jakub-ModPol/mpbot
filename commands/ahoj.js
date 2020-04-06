const { MessageEmbed } = require("discord.js");

exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('mp!'))return; 
    
    message.channel.send("> **1.4. to vypukne.** :smirk:\nChceš vědět víc? Ptej se do <#691604656727523350> a nebo přímo <@244439995799175169>.\nPřeji hodně ekonomických úspěchů. :wink:")
}


module.exports.help = {
    name:"sup",
    aliases: ["cs"]
  }
  
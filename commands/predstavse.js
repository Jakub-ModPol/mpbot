const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('mp!'))return;  

    let embed = new MessageEmbed()
    .setTitle("-=- Ekonomika ModPol -=-")
    .addField("Ahoj, já jsem ModPol Bot", "Jsem zde pro hlídání vašich bankovních účtů.")
    .addField("Hlavní příkazy:", "`pay || p` * `mepenize || ucet` * `vybrat || vy` * `vklad || vk` * `vyplata`")
    .addField("Pay", "Zaplaťte někomu na účet. ``mp!pay || mp!p``")
    .addField("Účet", "Zjisti jaký máš zůstatek v peněžence a nebo na účtu. ``mp!mepenize || mp!ucet``")
    .addField("Vybrat", "Nemáš v peněžence dostatek peněz? Vyber si je pomocí: ``mp!vybrat || mp!vy``")
    .addField("Vklad", "V pěněžence přebytek peněz. Co když je ztratíš? Dej je radši na svůj bankovní účet. ``mp!vklad || mp!vk``")
    .addField("Vyplata", "Výplata je potřeba! ``mp!vyplata prezident || mp!vyplata zastupitel || mp!vyplata poslanec || mp!vyplata senator || mp!vyplata premier || mp!vyplata ministr || mp!vyplata obcan``")
    .setColor("#FFFFFF")
    message.channel.send(embed)

}

module.exports.help = {
    name:"představ se",
    aliases: ["ahoj"]
  }
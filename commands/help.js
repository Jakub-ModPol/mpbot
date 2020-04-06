const Discord = require('discord.js')
const db = require('quick.db')
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('mp!'))return;  

    message.channel.send("Koukni se do soukromých zpráv. :wink:")

    let embed = new MessageEmbed()
    .setTitle("-=- Ekonomika ModPol -=-")
    .addField("ModPol BOT", "Pomoc si vždy vyžádej v jakémkoli kanálu ModPolu. Bot ji smaže a zašle ti odpověď. Např. ``mp!help pay``")
    .addField("Hlavní příkazy:", "`pay || p` * `mepenize || ucet` * `vybrat || vy` * `vklad || vk` * `vyplata`")
    .addField("Pay", "Zaplaťte někomu na účet. ``mp!pay || mp!p``")
    .addField("Účet", "Zjisti jaký máš zůstatek v peněžence a nebo na účtu. ``mp!mepenize || mp!ucet``")
    .addField("Vybrat", "Nemáš v peněžence dostatek peněz? Vyber si je pomocí: ``mp!vybrat || mp!vy``")
    .addField("Vklad", "V pěněžence přebytek peněz. Co když je ztratíš? Dej je radši na svůj bankovní účet. ``mp!vklad || mp!vk``")
    .addField("Vyplata", "Výplata je potřeba! ``mp!vyplata prezident || mp!vyplata zastupitel || mp!vyplata poslanec || mp!vyplata senator || mp!vyplata premier || mp!vyplata ministr || mp!vyplata obcan``")
    .setColor("#FFFFFF")

    
    
    if(!args[0]) {
      message.member.send(embed)
      .then(message.member.send("S jakým příkazem ti mohu pomoci? :blush:"));
    } else if(args[0] == 'pay') {
      message.member.send("``mp!pay`` <@244439995799175169> 100\n\nPro pomoc s jinými příkazy napiš ``mp!help``.")
      .then(message.member.send("Pokud vše proběhne jak má, pošlu ti tuto zprávu:\n `Úspěšně jsi poslal, Jαkub💚, 100Kč`"))
    }else if(args[0] == 'ucet') {
      message.member.send("Abys zjistil, kolik máš u sebe a kolik na bankovním účtu, musíš použít ``mp!ucet``")
      .then(message.member.send("**Zůstatek hráče <@244439995799175169>:**\n\nPeněženka: 30\nModPol Banka: 1000Kč"))
    }else if(args[0] == 'vybrat') {
      message.member.send("Někdy hold musíš vybrat peníze, abys mohl zaplatit někomu dalšímu. K výběru slouží ``mp!vyber 100``")
      .then(message.member.send("`Úspěšně jsi vybral 100Kč ze svého bankovního účtu.`"))
    }else if(args[0] == 'vklad') {
      message.member.send("Mít po kapsách spousty peněz není nejbezpečnější. Raději si je ulož na bankovní účet ``mp!vklad 100``")
      .then(message.member.send("`Vklad byl úspěšný! Vložil jsi 100Kč do tvé ModPol banky.`"))
    }else if(args[0] == 'vyplata') {
      message.member.send("Výplata je jednou za měsíc. Vybíráš ji za pomoci ``mp!`` a tvoje pozice. Třeba ``mp!vyplata obcan``\n**VŽDY VYBÍREJ TU NEJVYŠŠÍ MOŽNOU ČÁSTKU!** tzn. pokud jsi minmistr, nevybírej si plat pro občana.")
      .then(message.member.send("Gratuluji <@244439995799175169>, právě sis vyzvedl výplatu, která činí: 24000Kč`"))
    }

};

module.exports.help = {
  name:"help",
  aliases: ["pomoc"]
}
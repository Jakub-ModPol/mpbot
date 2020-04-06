const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const { MessageEmbed } = require("discord.js");
const { promptMessage } = require("../functions.js");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('mp!'))return;  
  if(args[0] == 'poslanec') {
  let user = message.author;
  let timeout = 2592000000;
  let amount = 1800000;
  if(!message.member.roles.cache.some(r => r.name === "Poslanec | Poslankyně")){ return message.channel.send("**Na tento plat nemáš nárok**") 
  }else {
    let monthly = await db.fetch(`monthly_${message.guild.id}_${user.id}`);

    if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
      let time = ms(timeout - (Date.now() - monthly));
  
      let timeEmbed = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`Tvá výplata byla již vybrána.\n\nPříští výplata tě čeká za: ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
      message.channel.send(timeEmbed)
    } else {
      let moneyEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Gratuluji ${user}, právě sis vyzvedl výplatu, která činí: ${amount}Kč`);
    message.channel.send(moneyEmbed)
    db.add(`money_${message.guild.id}_${user.id}`, amount)
    db.set(`monthly_${message.guild.id}_${user.id}`, Date.now())
    
  }
}

  }else if(args[0] == 'senator') {

    let user = message.author;
  let timeout = 2592000000;
  let amount = 1800000;
  if(!message.member.roles.cache.some(r => r.name === "Senátor | Senátorka")) { return message.channel.send("**Na tento plat nemáš nárok**")
  }
    let monthly = await db.fetch(`monthly_${message.guild.id}_${user.id}`);

    if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
      let time = ms(timeout - (Date.now() - monthly));
  
      let timeEmbed = new MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`Tvá výplata byla již vybrána.\n\nPříští výplata tě čeká za: ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
      message.channel.send(timeEmbed)
    } else {
      let moneyEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Gratuluji ${user}, právě sis vyzvedl výplatu, která činí: ${amount}Kč`);
    message.channel.send(moneyEmbed)
    db.add(`money_${message.guild.id}_${user.id}`, amount)
    db.set(`monthly_${message.guild.id}_${user.id}`, Date.now())
  }
}else if(args[0] == 'zastupitel') {

  let user = message.author;
let timeout = 2592000000;
let amount = 1200000;
if(!message.member.roles.cache.some(r => r.name === "Zastupitel")) { return message.channel.send("**Na tento plat nemáš nárok**")
}
  let monthly = await db.fetch(`monthly_${message.guild.id}_${user.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - monthly));

    let timeEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Tvá výplata byla již vybrána.\n\nPříští výplata tě čeká za: ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Gratuluji ${user}, právě sis vyzvedl výplatu, která činí: ${amount}Kč`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`monthly_${message.guild.id}_${user.id}`, Date.now())
}

}else if(args[0] == 'ministr') {

  let user = message.author;
let timeout = 2592000000;
let amount = 3240000;
if(!message.member.roles.cache.some(r => r.name === "Ministr | Ministryně")) { return message.channel.send("**Na tento plat nemáš nárok**")
}
  let monthly = await db.fetch(`monthly_${message.guild.id}_${user.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - monthly));

    let timeEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Tvá výplata byla již vybrána.\n\nPříští výplata tě čeká za: ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Gratuluji ${user}, právě sis vyzvedl výplatu, která činí: ${amount}Kč`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`monthly_${message.guild.id}_${user.id}`, Date.now())
}

}else if(args[0] == 'prezident') {

  let user = message.author;
let timeout = 2592000000;
let amount = 5640000;
if(!message.member.roles.cache.some(r => r.name === "Prezident")) { return message.channel.send("**Na tento plat nemáš nárok**")
}
  let monthly = await db.fetch(`monthly_${message.guild.id}_${user.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - monthly));

    let timeEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Tvá výplata byla již vybrána.\n\nPříští výplata tě čeká za: ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Gratuluji ${user}, právě sis vyzvedl výplatu, která činí: ${amount}Kč`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`monthly_${message.guild.id}_${user.id}`, Date.now())
}

}else if(args[0] == 'premier') {

  let user = message.author;
let timeout = 2592000000;
let amount = 4560000;
if(!message.member.roles.cache.some(r => r.name === "Předseda vlády" || "Předseda senátu" || "Předseda PS")) { return message.channel.send("**Na tento plat nemáš nárok**")
}
  let monthly = await db.fetch(`monthly_${message.guild.id}_${user.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - monthly));

    let timeEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Tvá výplata byla již vybrána.\n\nPříští výplata tě čeká za: ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Gratuluji ${user}, právě sis vyzvedl výplatu, která činí: ${amount}Kč`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`monthly_${message.guild.id}_${user.id}`, Date.now())
}


}else if(args[0] == 'obcan') {

  let user = message.author;
let timeout = 2592000000;
let amount = 576000;
if(!message.member.roles.cache.some(r => r.name === "Hráč")) { return message.channel.send("**Na tento plat nemáš nárok**")
}
  let monthly = await db.fetch(`monthly_${message.guild.id}_${user.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - monthly));

    let timeEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Tvá výplata byla již vybrána.\n\nPříští výplata tě čeká za: ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Gratuluji ${user}, právě sis vyzvedl výplatu, která činí: ${amount}Kč`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`monthly_${message.guild.id}_${user.id}`, Date.now())
}
}

};


module.exports.help = {
  name:"vyplata",
  aliases: ["vp"]
}
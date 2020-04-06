const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(message.author.id != "244439995799175169") return message.message.channel.send("You're the bot the owner!")

    if(!args[0]) return message.channel.send("Řekni jaký command chceš obnovit.")

    try {
        delete require.cache[require.resolve(`./${commnadName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandsName, pull)

    } catch(e) {
        return message.channel.send(`Could not reload: \`${args[0].toUpperCase()}\``)
    }

    message.channel.send(`The command \`${args[0].toUpperCase()} has been reloaded.`)
}

module.exports.help = {
    name:"reload",
    aliases: ["rel"]
  }
const db = require("quick.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {

  name: "help",

  category: "info",
    aliases: ['cmd', 'dash', 'cmds'],
    description: 'Check\'s bot\'s dashboard',
  run: async (client, message, args, del, member) => {
  
  const members = message.guild.members.cache;
  
      message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${message.author.tag}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField('**• Websites**', `**[Dash](http://kanata.ezyro.com/)**`, true)

            .setTimestamp()
           .setFooter(
           `Kanata NextGen`,
            client.user.displayAvatarURL()  
      ))
         }
};

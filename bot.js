const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready" , async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame("discord.io/BEPROTNAMIS!")
});

bot.on("message" , async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}pagalba`){
    return message.channel.send("Administratoriams žinutė išsiusta , susisieksime su jumis kaip galėsime");
  }

if(cmd === `${prefix}informacija`){

  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Serverio Informacija")
  .setColor("#3399ff")
  .setThumbnail(sicon)
  .addField("Serverio Pavadinimas" , message.guild.name)
  .addField("Sukurimo Data" , message.guild.createdAt)
  .addField("Tu prisijungei" , message.member.joinedAt)
  .addField("Visi Nariai" , message.guild.memberCount);

  return message.channel.send(serverembed);

}


if(cmd === `${prefix}apiebota`){

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Boto Informacija")
  .setColor("#3399ff")
  .setThumbnail(bicon)
  .addField("Boto Vardas" , bot.user.username)
  .addField("Sukurimo Data" , bot.user.createdAt);


  return message.channel.send(botembed);

}


});

bot.login(botconfig.token);

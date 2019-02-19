const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTQ3MTU3MTQ5OTE5MjE1NjE4.D0zzGQ.2eGkON1OuPjlmsyl1qlVnHOzpHw);//where BOT_TOKEN is the token of our bot

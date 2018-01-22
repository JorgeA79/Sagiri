const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	   client.user.setPresence({game: {name: "to Draw | s!help", type: 0}});
});

var prefix = "s!"

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`:ping_pong: Pong! \nTime taken: \`${Date.now() - message.createdTimestamp} ms\``);
	}
});

//Important
client.login(process.env.BOT_TOKEN);


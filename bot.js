const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	   client.user.setPresence({game: {name: "to Draw | s!help", type: 0}});
});

var prefix = "s!"

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
	
	message.author.send(`${message.author.username} you need a little help with the commands, there you go:\n **-j.hello**\n **-j.dbs**\n **-j.ssj**\n **-j.ssgss**\n **-j.dex help**\n **-j.xd**\n **-j.fact**\n **-j.wait**\n **-j.ping**\n **-j.join**\n **-j.invite**`);
	message.channel.send(`${message.author.username} message sent :mailbox:`)
		
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`:ping_pong: Pong! \nTime taken: \`${Date.now() - message.createdTimestamp} ms\``);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'invite')) {
	var selectVideo = randomVideo[Math.floor(Math.random() * randomVideo.length)];
		const embed = new Discord.RichEmbed()
  .setTitle("> Click to invite me to your server <")
  .setAuthor("Sagiri", "https://cdn.discordapp.com/attachments/405118984451653633/405149148002648065/DEUtpOVWsAEzzri.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7AFFA8)
  
  .setThumbnail("https://cdn.discordapp.com/attachments/405118984451653633/405149226604167179/91380.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discordapp.com/oauth2/authorize?client_id=405120990742446082&scope=bot&permissions=1")
  

  message.channel.send({embed});
		
		 
	}
});
//Important
client.login(process.env.BOT_TOKEN);


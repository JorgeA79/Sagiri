const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() => {
	   client.user.setPresence({game: {name: "to Draw | s!help", type: 0}});
});

var prefix = "s!"
//Normal Commands
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
		
	
	message.author.send(`${message.author.username} you seem a bit confused here you can have our commands:\n **-j.hello**\n **-j.dbs**\n **-j.ssj**\n **-j.ssgss**\n **-j.dex help**\n **-j.xd**\n **-j.fact**\n **-j.wait**\n **-j.ping**\n **-j.join**\n **-j.invite**`);
	message.channel.send(`${message.author.username} i sent you a message that will help you a bit :mailbox_with_mail:`)
		
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
//MiniGames
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'flip')) {
		
	 	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Head")

  .setColor(0x7AFFA8)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")


  message.channel.send({embed});
    	} else if (result == 2) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Tail")

  .setColor(0x7AFFA8)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")


  message.channel.send({embed});
    	}
		
	}
});
//Important
client.login(process.env.BOT_TOKEN);


const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready',() => {
	   client.user.setPresence({game: {name: "to Draw | s!help", type: 0}});
});

var prefix = "s!"
var answers = 
    			["It is certain",
			"It is decidedly so",
			"Without a doubt",
			"Yes, definitely",
			"You may rely on it",
			"As I see it, yes",
			"Most likely",
			"Outlook good",
			"Yes",
			"Signs point to yes",
			"Reply hazy try again",
			"Ask again later",
			"Better not tell you now",
			"Cannot predict now",
			"Concentrate and ask again",
			"Don't count on it",
			"My reply is no",
			"My sources say no",
			"Outlook not so good",
			"Very doubtful"];
//Normal Commands
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
		
	const embed = new Discord.RichEmbed()
  .setTitle("Sagiri's Commands")
  .setAuthor("Sagiri", "https://cdn.discordapp.com/attachments/405118984451653633/405149148002648065/DEUtpOVWsAEzzri.png")
   .setColor(0x7AFFA8)
  .setDescription("Here you can find the main commands of the bot so you wont get confused")
.setThumbnail("https://cdn.discordapp.com/attachments/405118984451653633/405149226604167179/91380.png")

  .addField("Main Commands",
    "\`help\`,\`ping\`,\`invite\`")

  .addField("Fun Commands", "\`8ball\`, \`flip\` \`head\` or \`tail\`", true)


  message.author.send({embed});
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
	if (message.content.startsWith(prefix + 'flip head')) {
		
	 	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Head")

  .setColor(0x7AFFA8)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")


  message.channel.send({embed});
		 message.channel.send(`You got me <:anime:405162482370347019>`);
    	} else if (result == 2) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Tail")

  .setColor(0x7AFFA8)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")
		

  message.channel.send({embed});
		 message.channel.send(`WOOOOOOOOOOO <:smug_maeve:405166781976674304>`);
    	}
		
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'flip tail')) {
		
	 	var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Head")

  .setColor(0x7AFFA8)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")


  message.channel.send({embed});
		 message.channel.send(`WOOOOOOOOOOO <:smug_maeve:405166781976674304>`);
    	} else if (result == 2) {
    		const embed = new Discord.RichEmbed()

  .setTitle("Tail")

  .setColor(0x7AFFA8)
  .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif")
		

  message.channel.send({embed});
		
		 message.channel.send(`You got me <:anime:405162482370347019>`);
    	}
		
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + '8ball')) {
	var r8ballAnswer = answers[Math.floor(Math.random() * answers.length)];
		message.channel.send(r8ballAnswer);
	}
});
//Important
client.login(process.env.BOT_TOKEN);


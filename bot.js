const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));

//Xp system


//xp end
client.on('ready',() => {
	   client.user.setPresence({game: {name: "to Draw | s!help", type: 0}});
});

var prefix = "s!"

var levels = "0"
var balance = "0"
var reputation = "0"
var experience = "0"

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
var dbsfacts = [
  
 
  "Did you know that Goku has perfomed the Kamehameha a total of 97 times throughout all three series.",
  "Did you know that Bulma goes through 17 different hairstyles throughout the series.",
  "Did you know that Android 17's real name is Lapis.",
  "Did you know that Android 18's real name is Lazuli.",
  "Did you know that The fight between Goku and Frieza took up a total of three and a half hours of screen time, making it the longest fight in anime history.",
  "Did you know that Goku's mother is a Saiyan known as Gine."
]
var pokefacts = [
 "Did you know that In Pokemon stadium, it was revealed how Doduo can learn the move fly. Apparently it just runs really fast and the running motion gives it the power of flight! It just floats there, running in place...",
  "Did you know that Genesect is a very futuristic Pokemon, and Kabutops is an ancient fossil. However, there are rumors that Genesect is actually a Kabutops that's been modified. Although the two don't share any of the same types and use barely any of the same attacks, there is a definite resemblence, especially when you compare Genesect's head to Kabuto.",
  "Did you know that Azurill is the only Pokemon that can change it's gender when evolving. When evolving into Marill, Azurill has a 1 in 4 chance of switching genders. Fans have debated whether this is because some amphibians are able to change gender, or that it may have embryonic qualities that mean it hasn't fully formed into a gender yet.",	
  "Did you know that Although Munna wasn't introduced until generation 5, it is actually referenced in the very first game! A woman standing outside of Rock Tunnel in Pokemon Red and Blue dreams about a chunky pink Pokemon with a floral pattern. Clearly the game makers had Munna in mind even way back then.",
]
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
    "\`help\`,\`ping\`,\`invite\,\`profile\` ")

  .addField("Fun Commands", "\`8ball\`, \`flip\` \`head\` or \`tail\`", true)
	.addBlankField(true)
  .addField("Anime Commands", "\`fact pokemon\`, \`fact db\`", true)

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
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'profile')) {

		var username = message.author.username
		var avatar = message.author.avatarURL
		const embed = new Discord.RichEmbed()

  .setAuthor(username, avatar)
  .setColor(0x7AFFA8)
  
  .setThumbnail(avatar)



  .addField(":star:Levels", levels + "(" + experience + " xp)", true)

  .addField(":dollar:Credits", "$" + balance , true)

  .addField(":yellow_heart:Reputation",
    reputation)		
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
//Anime Commands
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'fact pokemon')) {
		var pokefactAnswer = pokefacts[Math.floor(Math.random() * pokefacts.length)];
		message.channel.send(pokefactAnswer);
		}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'fact db')) {
		var dbsfactAnswer = dbsfacts[Math.floor(Math.random() * dbsfacts.length)];
		message.channel.send(dbsfactAnswer);
		}
});
client.on("message", message => {

  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.reply(`You"ve leveled up to level **${curLevel}**! Ain"t that dandy?`);
  }
levels = userData.level
experience = userData.points
  if (message.content.startsWith(prefix + "level")) {
    message.reply(`You are currently level ${userData.level}, with ${userData.points} points.`);
  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });

});

//Important
client.login(process.env.BOT_TOKEN);


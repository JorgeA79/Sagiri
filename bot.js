const Discord = require('discord.js'); 
const client = new Discord.Client();
const yt = require('ytdl-core');
const opus = require('node-opus');
const ffmpeg = require('ffmpeg');
const playArbitraryFFmpeg = require('discord.js-arbitrary-ffmpeg');

var Pokedex = require('pokedex'),
    pokedex = new Pokedex();
 
 var pokemon = require('pokemon-picker');

const fs = require("fs"); 
 

let points = JSON.parse(fs.readFileSync("./points.json", "utf8"));
let mirrendex = JSON.parse(fs.readFileSync("./MirrenDex/Mirren.json", "utf8"));
//Xp system


//xp end
client.on('ready',() => {
	   client.user.setPresence({game: {name: "to Draw | s!help", type: 0}});
});

var prefix = "s!"

var levels = "0"
var levelsequ = "0"
var nextlevel = "0"
var balance = "0"
var reputation = "0"
var experience = "0"
 
var triviaie = [
	      "Who wears goggles and a cape?",
	      "Who is the Soccer Freak Captain?",
	      "Who is known as the midfield magician?",
	      "Who is the ace striker's younger sister?",
	      "Who is Raimon's Dragon shot user?",
	      "Who is the grandfather of Mamoru?",
	      "Who is Raimon's fastest player?",
	      "Which team is based off the Mythological Gods?",
	      "Who is Raimon's Ace Striker?",
	      "Who wears an eye patch and striker of Teikoku?"]
var trivianswersie = [
	"KIDOU",
	"ENDOU",
	"ICHINOSE",
	"YUUKA",
	"SOMEOKA",
	"DAISUKE",
	"KAZEMARU",
	"ZEUS",
	"GOUENJI",
	"SAKUMA"]

var triviadb = [
	      "What is the name of Goku's wife?",
	      "Who killed Cell?",
	      "Of the dragonballs. What is the number of Goku's luck?",
	      "What is Goku's real name?"]
var trivianswersdb = [
	      "CHI-CHI",
	      "GOHAN",
	      "4",
		   "KAKARROT"]

var hugifs = 
    			["https://www.google.com.mx/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi-4Nmoh4fcAhWDyIMKHQ7eD_8QjRx6BAgBEAU&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fanime-hug-gifs&psig=AOvVaw1N9HdmE7mEM4SSNurTEmPC&ust=1530849060396916"];
var slapgifs = 
    			["https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/c/cd/Slap.gif.gif/revision/latest?cb=20130131011837",
			"https://media1.tenor.com/images/85722c3e51d390e11a0493696f32fb69/tenor.gif?itemid=5463215",
			"https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif",
			"http://img.photobucket.com/albums/v639/aoie_emesai/100handslap.gif",
			"https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
			"http://i.imgur.com/dzefPFL.gif",
			"https://s1.favim.com/orig/140403/anime-funny-haruno-naruto-Favim.com-1603470.gif",
			"https://gifimage.net/wp-content/uploads/2017/07/anime-slap-gif-18.gif"];
var faintgifs = 
    			["https://media.tenor.com/images/4a0dc871f539484411011ae8c92c5980/tenor.gif",
			"https://media1.tenor.com/images/00e497c5f05179b90828a97f17f409a2/tenor.gif?itemid=5240290",
			"https://pa1.narvii.com/6603/59433c5fdf798f5327f1015d605e5a736654c92d_hq.gif",
			"https://pa1.narvii.com/6603/c0b5bf4cc24469429ea8017c5b98ca7027398a04_hq.gif",
			"https://www.collegemagazine.com/wp-content/uploads/2016/07/tumblr_lqv1qsZVHw1qc2jhfo1_500.gif"];
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
var facts= [
   "xd"
]
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
    "\`help\`,\`ping\`,\`invite\`,\`server\`,\`machmirror\`,\`profile\`,\`level\`")

  .addField("Fun Commands", "\`8ball\`, \`flip\` \`head\` or \`tail\`")
  .addField("Anime Commands", "\`fact pokemon\`, \`fact db\`")
  .addField("Audio Commands", "\`play <URL>\`,\`join\`,\`leave\`,\`topsongs\`,\`topplay <Number of the song>\`")
.addField("Roleplay Commands", "\`hug\`,\`slap\`,\`kill\`")
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
	if (message.content.startsWith(prefix + 'server')) {

		const embed = new Discord.RichEmbed()
  .setTitle("> Click to join our server <")
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
  .setURL("https://discord.gg/SguFDuw")
  

  message.channel.send({embed});
		
		 
	}
		
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'machmirror')) {

		const embed = new Discord.RichEmbed()
  .setTitle("> Click to join Mach Mirror server <")
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
  .setURL("https://discord.gg/98XKyK5")
  

  message.channel.send({embed});
		
		 
	}
		
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'code')) {

		const embed = new Discord.RichEmbed()
  .setTitle("> Click to watch the code on Github<")
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
  .setURL("https://github.com/JorgeA79/Sagiri/blob/master/bot.js")
  

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



  .addField(":star:Levels", levels + " (" + experience + " xp/ " + levelsequ + " xp for level " + nextlevel + ")", true)

  .addField(":dollar:Credits", "$" + balance , true)

  .addField(":yellow_heart:Reputation",
    reputation)		
  message.channel.send({embed});
		
		 
	}
		
});

//Roleplay
client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'hug')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	 
		var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
		  message.channel.send(`**${message.author.username}** hugged **${member.user.username}**`);
		const embed = new Discord.RichEmbed()

  .setImage(selecthugGif)
   message.channel.send({embed});
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'slap')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");
		
		var selectslapGif = slapgifs[Math.floor(Math.random() * slapgifs.length)];
		  message.channel.send(`**${message.author.username}** slapped **${member.user.username}**`);
		const embed = new Discord.RichEmbed()

  .setImage(selectslapGif)
   message.channel.send({embed});
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'kill')) {
		
		
  	let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");
		
		var selectkillGif = faintgifs[Math.floor(Math.random() * faintgifs.length)];
		  message.channel.send(`**${member.user.username}** fainted!`);
		const embed = new Discord.RichEmbed()

  .setImage(selectkillGif)
   message.channel.send({embed});
	}
});



client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'trivia ie')) {
		
		var selectkillGif = [Math.floor(Math.random() * triviaie.length)];
        var qsel = triviaie[selectkillGif]
	 var anssel = trivianswersie[selectkillGif]
        
		 
	message.channel.send(qsel + '\`30 seconds to answer, make sure to write all with CAPS\`')
.then(() => {
		
  message.channel.awaitMessages(response => response.content === anssel, {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
	  const embed = new Discord.RichEmbed()

  .setTitle("You are right")

  .setColor(0x7AFFA8)
  .setImage("https://media.giphy.com/media/14nU2foG3YIZ2g/giphy.gif")


  message.channel.send({embed});

    })
    .catch(() => {
      message.channel.send('AWWWW RIP :confused: ');
    });
});
	
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'trivia db')) {
		
		var selectkilldb = [Math.floor(Math.random() * triviadb.length)];
        var qselx = triviadb[selectkilldb]
	 var ansselx = trivianswersdb[selectkilldb]
        
		 
	message.channel.send(qselx + '\`30 seconds to answer, make sure to write all with CAPS\`')
.then(() => {
		
  message.channel.awaitMessages(response => response.content === ansselx, {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
	  const embed = new Discord.RichEmbed()

  .setTitle("You are right")

  .setColor(0x7AFFA8)
  .setImage("https://media.giphy.com/media/14nU2foG3YIZ2g/giphy.gif")


  message.channel.send({embed});

    })
    .catch(() => {
      message.channel.send('AWWWW RIP :confused: ');
    });
});
	
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'pokedex')) {
	
		
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

      let mon = args;
		
		var dexmon = mirrendex.kascal
		
		const embed = new Discord.RichEmbed()
  .setTitle(dexmon.name)

  .setColor(0x7401DF)
  .setDescription(dexmon.description)
  .setImage(dexmon.image)
.addField("Types:",
    dexmon.types)

  .setTimestamp()
  message.channel.send({embed});
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'puto')) {
	
		message.channel.send('elnelson');
  
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
	if (message.content.startsWith(prefix + 'fact')) {
		var factAnswer = facts[Math.floor(Math.random() * facts.length)];
		message.channel.send(factAnswer);
		}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'fact db')) {
		var dbsfactAnswer = dbsfacts[Math.floor(Math.random() * dbsfacts.length)];
		message.channel.send(dbsfactAnswer);
		}
});

	
//Music System
client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'play')) {
	
		  const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel){
      return message.channel.sendMessage(":x: You are not in a voice channel!!");
    }
	message.channel.sendMessage(":white_check_mark: **Connected!**");
    voiceChannel.join()
    .then(connection => {
	const args = message.content.split(" ").slice(1);
      let stream = yt(args.join(" "), {audioonly: true});
      yt.getInfo(args.join(" "), function(err, info) {
      const title = info.title
	  message.channel.sendMessage(`Now playing \`${title}\``)
      })
      const dispatcher = connection.playStream(stream);
      dispatcher.on('end', () => {
         voiceChannel.leave();
       }).catch(e =>{
         console.error(e);
       });
    })
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'join')) {
	
		  const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel){
      return message.channel.sendMessage(":x: You are not in a voice channel!!");
    }
	message.channel.sendMessage(":white_check_mark: **Connected!**");
    voiceChannel.join()
		
	}
	});
client.on('message', message => {
	if (message.author === client.user) return;
	 if(message.channel.type === 'dm') return;
	if (message.content.startsWith(prefix + 'leave')) {
	
		  const voiceChannel = message.member.voiceChannel;
     voiceChannel.leave();
		message.channel.sendMessage(":white_check_mark: **Disconnected!**");
	}
	});

client.on('message', message => {
	if (message.author === client.user) return;

	if (message.content.startsWith(prefix + 'topsongs')) {
	message.channel.sendMessage("\```Best Songs\n 1.Guren no Yumiya - Linked Horizon\n 2.Soul Eater resonance\n 3.Bloody Stream\n\ 4.Boku no Hero Academia OST 01 - You Say Run\n\ 5.My Hero Academia - Official Opening\n\```");
	}
	});

client.on('message', message => {
	if (message.author === client.user) return;

	if (message.content.startsWith(prefix + 'topplay 1')) {
		
	   	
		  const voiceChannel = message.member.voiceChannel;
    	if (!voiceChannel){
		
      return message.channel.sendMessage(":x: You are not in a voice channel!!");
    }
	message.channel.sendMessage(":white_check_mark: **Connected!**");
    voiceChannel.join()
    .then(connection => {
	const args = "https://www.youtube.com/watch?v=XMXgHfHxKVM";
	
      let stream = yt(args, {audioonly: true});
      yt.getInfo(args, function(err, info) {
      const title = info.title
	  message.channel.sendMessage(`Now playing \`${title}\``)
      })
      const dispatcher = connection.playStream(stream);
      dispatcher.on('end', () => {
         voiceChannel.leave();
       }).catch(e =>{
         console.error(e);
       });
    })
	}
	});
client.on('message', message => {
	if (message.author === client.user) return;

	if (message.content.startsWith(prefix + 'topplay 2')) {
		
	   
		
		  const voiceChannel = message.member.voiceChannel;
    	if (!voiceChannel){
		
      return message.channel.sendMessage(":x: You are not in a voice channel!!");
    }
	message.channel.sendMessage(":white_check_mark: **Connected!**");
    voiceChannel.join()
    .then(connection => {
	const args = "https://www.youtube.com/watch?v=Ii7jSGxDwPM";
	
      let stream = yt(args, {audioonly: true});
      yt.getInfo(args, function(err, info) {
      const title = info.title
	  message.channel.sendMessage(`Now playing \`${title}\``)
      })
      const dispatcher = connection.playStream(stream);
      dispatcher.on('end', () => {
         voiceChannel.leave();
       }).catch(e =>{
         console.error(e);
       });
    })
	}
	});
client.on('message', message => {
	if (message.author === client.user) return;

	if (message.content.startsWith(prefix + 'topplay 3')) {
		
		
		  const voiceChannel = message.member.voiceChannel;
    	if (!voiceChannel){
		
      return message.channel.sendMessage(":x: You are not in a voice channel!!");
    }
	message.channel.sendMessage(":white_check_mark: **Connected!**");
    voiceChannel.join()
    .then(connection => {
	const args = "https://www.youtube.com/watch?v=KoY66lqmcYA";
	
      let stream = yt(args, {audioonly: true});
      yt.getInfo(args, function(err, info) {
      const title = info.title
	  message.channel.sendMessage(`Now playing \`${title}\``)
      })
      const dispatcher = connection.playStream(stream);
      dispatcher.on('end', () => {
         voiceChannel.leave();
       }).catch(e =>{
         console.error(e);
       });
    })
	}
	});
client.on('message', message => {
	if (message.author === client.user) return;

	if (message.content.startsWith(prefix + 'topplay 4')) {
		
	   	
		
		  const voiceChannel = message.member.voiceChannel;
    	if (!voiceChannel){
		
      return message.channel.sendMessage(":x: You are not in a voice channel!!");
    }
	message.channel.sendMessage(":white_check_mark: **Connected!**");
    voiceChannel.join()
    .then(connection => {
	const args = "https://www.youtube.com/watch?v=Rnjwd16vpPs";
	
      let stream = yt(args, {audioonly: true});
      yt.getInfo(args, function(err, info) {
      const title = info.title
	  message.channel.sendMessage(`Now playing \`${title}\``)
      })
      const dispatcher = connection.playStream(stream);
      dispatcher.on('end', () => {
         voiceChannel.leave();
       }).catch(e =>{
         console.error(e);
       });
    })
	}
	});
client.on('message', message => {
	if (message.author === client.user) return;

	if (message.content.startsWith(prefix + 'topplay 5')) {
		
	   
		
		  const voiceChannel = message.member.voiceChannel;
    	if (!voiceChannel){
		
      return message.channel.sendMessage(":x: You are not in a voice channel!!");
    }
	message.channel.sendMessage(":white_check_mark: **Connected!**");
    voiceChannel.join()
    .then(connection => {
	const args = "https://www.youtube.com/watch?v=-77UEct0cZM";
	
      let stream = yt(args, {audioonly: true});
      yt.getInfo(args, function(err, info) {
      const title = info.title
	  message.channel.sendMessage(`Now playing \`${title}\``)
      })
      const dispatcher = connection.playStream(stream);
      dispatcher.on('end', () => {
         voiceChannel.leave();
       }).catch(e =>{
         console.error(e);
       });
    })
	}
	});
//Moderation Commands

  
//Important
client.login(process.env.BOT_TOKEN);


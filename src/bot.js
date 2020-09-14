//
//CSLA EE Discord Bot
//Language JavaScript
//Purpose: to manage the CSULA Discord server
//Author: Alejadnro Martinez
//Contributors:
//Date Created: 9/12/202
//
require('dotenv').config();
const { Client } = require('discord.js');

const bot = new Client;
const CMD_PREFIX = '$';
const channelGeneral        = '751131553614004327';
const channel_general       = '753036544369229824';
const message_generalID     = '1235';
const channel_Communication	= '754783222256107663';
const channel_Power	        = '753036805259132929';
const channel_Computers	    = '753036882983518248';
const channel_Controls	    = '753037118313594890';
const channel_Electronics	= '753037219182149736';
const channel_Biomedical	= '753037219182149736';
const channel_Labs	    	= '754799108845207652';
const message_general       = "Welcome to the General Major Calsses adding Channel\nTo get access to the class channel and othe features please react with the appropriate emoji for your class:\n";



//Logs that The console is up and running on console
bot.on('ready', () => {
    console.log(`${bot.user.tag}`);
});

//Sends message to new users in the general chat
bot.on('guildMemberAdd', (member) =>{
    bot.channels.cache.get(channelGeneral).send(`${member.displayName} Welcome to the CSULA EE Server! Please Read the Rules to access the rest of the Server!`);
    console.log(`${member.user.tag}`);
});

//I want the User to be assigned a role when they react to a specific message

bot.on('messageReactionAdd', (reaction, user) =>{
    const { name } = reaction.emoji;
    const memeber = reaction.message.guild.memeber.cahce.get(user.id);
    if(reaction.message.id === ''){
        switch(name){
            case '':
                member.role.add();
            break;
        }
    }

})

//I want the Server to be onpened to them only when they read all the rules


bot.on('message', (message) => {

    if (message.author.bot) return;//Prevent Bot from responding to other bots
    //Processes commands
    if(message.content.startsWith(CMD_PREFIX)){
        message.channel.send('Test Recieved');
        bot.channels.cache.get(channel_general).send(message_general);
    }

})

bot.login(process.env.CSLA_EE_BOT);



/*

*/
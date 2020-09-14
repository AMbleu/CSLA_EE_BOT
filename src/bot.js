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

const bot = new Client({
    partials: ['MESSAGE', 'REACTION']
});
const CMD_PREFIX = '$';


const channelGeneral            = '751131553614004327';
const channel_general       = '753036544369229824';
const message_generalID         = '754920121427820546';
const channel_Communication = '753036948930560040';
const message_CommunicationID   = '754906942559879189';
const channel_Power	        = '753036805259132929';
const message_PowerID           = '754907046544932865';
const channel_Computers	    = '753036882983518248';
const message_ComputersID       = '754907138144600134';
const channel_Controls	    = '753037118313594890';
const message_ControlsID        = '754907204225728573';
const channel_Electronics	= '753037219182149736';
const message_ElectronicsID     = '754907544404754580';
const channel_Biomedical	= '753037166271266907';
const message_BiomedicalID      = '754908100326326313';
const channel_Labs	    	= '754799108845207652';
const message_LabsID            = '754908165551947786';
const message_general       = 'Welcome to the General Major Calsses adding Channel\nTo get access to the class channel and othe features please react with the appropriate emoji for your class:\nEE2040 - Circuit Analysis 1: :cloud_lightning: \nEE2440 - Digital Engineering: :man_technologist: \nEE2450 - Embedded 1: :computer: \nEE3000 - Economics for Engineers: :money_with_wings: \nEE3010 - Ethics and Professionalism in Engineering: :angel: \nEE3020 - Signal and Systems: :signal_strength: \nEE3030 - Circuit Analysis 2: :thunder_cloud_rain: \nEE3040 - Probability: :game_die: \nEE3050 - Electric Machines: :electric_plug:';
const message_Communication = 'Welcome to the Communication Specialty Calsses adding Channel\nTo get access to the class channel and othe features please react with the appropriate emoji for your class:\nEE3200 - Analog Communication Systems: :sound: \nEE4200 - Digital Communications Systems: :loud_sound: \nEE4210 - Coding for Communications: :jigsaw: \nEE4220 - Digital Signals Processing: :notes: \nEE4230 - Antennas: :satellite: \nEE4240 - Fiberoptics: :flying_saucer: \nEE4250 - Digital Image Processing: :eyes:';
const message_Power         = 'Welcome to the Power Specialty Calsses adding Channel\nTo get access to the class channel and othe features please react with the appropriate emoji for your class: \nEE3300 - Electric Machines: :blue_car: \nEE4320 - Electric Power Distribution: :man_factory_worker: \nEE4300 - Introduction to Power Systems Engineering: :steam_locomotive: \nEE4310 - Power System Analysis: :hammer: \nEE4330 - Power Electronics: ::race_car: \nEE4340 - Electromagnetic Energy Conversion: :magnet:';
const message_Computers     = 'Welcome to the Computer Specialty Calsses adding Channel\nTo get access to the class channel and othe features please react with the appropriate emoji for your class: \nEE3450 - Embedded System Programming 2: :computer: \nEE4400 - Data Communications and Networking: :file_folder: \nEE4420 - Multimedia Networking: :cd: \nEE4440 - Computer Organization: :smiling_imp: \nEE4450 - Embedded Architecture: :tram: \nEE4480 - Advanced Digital Design: :rocket:';
const message_Controls      = 'Welcome to the Controls Specialty Calsses adding Channel\nTo get access to the class channel and othe features please react with the appropriate emoji for your class: \nEE3600 - Controls Systems 1: :control_knobs: \nEE4600 - Controls Ststems 2: :goggles: \nEE4610 - Digital Controls Systems: :arrow_heading_up: \nEE4620 - Modern Controls Systems: :arrow_heading_down:';
const message_Electronics   = 'Welcome to the Electronics Specialty Calsses adding Channel\nTo get access to the class channel and othe features please react with the appropriate emoji for your class: \nEE3700 - Electronics 1: :cloud_lightning: \nEE3710 - Electronics 2: :signal_strength: \nEE3720 - Digital Electronics: :tv: \nEE4710 - Analog Integrated Circuits: :robot: \nEE4720 - CMOS VLSI Design: :pinching_hand: \nEE4730 - Optoelectronics: :brain:';
const message_Biomedical    = 'Welcome to the Biomedical Specialty Calsses adding Channel\nTo get access to the class channel and othe features please react with the appropriate emoji for your class: \nEE3810 - Sensors, Data Acquisition, and Instrumentation w/ Applicaiton in Biomedical Engineering: :heart: \nEE4810 - Biomedical Devices: :mechanical_leg: \nEE4820 - Biomedical Signal Processing: :brain:';
const message_Labs          = 'Welcome to the Labs adding Channel\nTo get access to the class channel and othe features please react with the appropriate emoji for your class:\nEE2049 - Electrical Circuits and Measurments Labratory: :cloud_lightning: \nEE2449 - Digital Logic Labratory: :computer: \nEE3209 - Communications Labratory: :microphone: \nEE3309 - Electromagnetic Energy Conversion Labratory: :magnet: \nEE3709 - Electronics Labratory: :robot: \nEE4229 - Digital Signals Processing Labratory: :loud_sound: \nEE4689 - Control Systems Labratory: :control_knobs:';






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
    //Adds classes for the General Classes
    if(reaction.message.id === message_generalID){
        switch(name){
            case '1':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '2':
                member.role.add();//Add EE2440 - Digital Engineering
            break;
            case '3':
                member.role.add();//Add EE2450 - Embedded 1
            break;
            case '4':
                member.role.add();//Add EE3000 - Econimics for Engineers
            break;
            case '5':
                member.role.add();//Add EE3010 - Ethics and Professionalism in Engineering
            break;
            case '6':
                member.role.add();//Add EE3020 - Signals and Systems
            break;
            case '7':
                member.role.add();//Add EE3030 - Circuit Analysis 2
            break;
            case '8':
                member.role.add();//Add EE3040 - Probability
            break;
            case '9':
                member.role.add();//Add EE3050 - Electric Machines
            break;
        }
    }
    //Adds Classes for the Communications classes
    if(reaction.message.id === message_CommunicationID){
        switch(name){
            case '1':
                member.role.add();//Add EE3200 - Analog Communications Systems
            break;
            case '2':
                member.role.add();//Add EE4200 - Digital Communications Systems
            break;
            case '3':
                member.role.add();//Add EE4210 - Coding for Communications
            break;
            case '4':
                member.role.add();//Add EE4220 - Digital Signals Processing 
            break;
            case '5':
                member.role.add();//Add EE4230 - Antennas
            break;
            case '6':
                member.role.add();//Add EE4240 - Fiberoptics
            break;
            case '7':
                member.role.add();//Add EE4250 - Digital Iamge Processing
            break;
        }
    }
    //Adds Classes for the Power classes
    if(reaction.message.id === message_PowerID){
        switch(name){
            case '1':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '2':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '3':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '4':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '5':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '6':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
        }
    }
    //Adds Classes for the Computer classes
    if(reaction.message.id === message_ComputersID){
        switch(name){
            case '1':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '2':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '3':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '4':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '5':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '6':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
        }
    }
    //Adds Classes for the Controls classes
    if(reaction.message.id === message_ControlsID){
        switch(name){
            case '1':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '2':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '3':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '4':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
        }
    }
    //Adds Classes for the Electronics classes
    if(reaction.message.id === message_ElectronicsID){
        switch(name){
            case '1':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '2':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '3':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '4':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '5':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '6':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
        }
    }
    //Adds Classes for the Biomedical classes
    if(reaction.message.id === message_BiomedicalID){
        switch(name){
            case '1':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '2':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '3':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
        }
    }
    //Adds Classes for the Labs
    if(reaction.message.id === message_LabsID){
        switch(name){
            case '1':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '2':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '3':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '4':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '5':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '6':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
            case '7':
                member.role.add();//Add EE2040 - Circuit Analysis 1
            break;
        }
    }

})

//I want the Server to be onpened to them only when they read all the rules


bot.on('message', (message) => {
    if (message.author.bot) return;//Prevent Bot from responding to other bots
    //Processes commands
    if(message.content.startsWith(CMD_PREFIX)){
        //message.channel.send('Test Recieved');
        const [CMD_NAME, ...args ] = message.content.trim().substring(CMD_PREFIX.length).split(/\s+/);
        
        
        
        
        
        
        //Commands below should only be used if you know exactly what they do!
        if(CMD_NAME.toLowerCase() === 'setup_general' && message.author.tag === 'Alejandro#1803'){
            bot.channels.cache.get(channel_general).send(message_general);
        }
        if(CMD_NAME.toLowerCase() === 'setup_biomedical' && message.author.tag === 'Alejandro#1803'){
            bot.channels.cache.get(channel_Biomedical).send(message_Biomedical);
        }
        if(CMD_NAME.toLowerCase() === 'setup_power' && message.author.tag === 'Alejandro#1803'){
            bot.channels.cache.get(channel_Power).send(message_Power);
        }
        if(CMD_NAME.toLowerCase() === 'setup_electronics' && message.author.tag === 'Alejandro#1803'){
            bot.channels.cache.get(channel_Electronics).send(message_Electronics);
        }
        if(CMD_NAME.toLowerCase() === 'setup_computer' && message.author.tag === 'Alejandro#1803'){
            bot.channels.cache.get(channel_Computers).send(message_Computers);
        }
        if(CMD_NAME.toLowerCase() === 'setup_controls' && message.author.tag === 'Alejandro#1803'){
            bot.channels.cache.get(channel_Controls).send(message_Controls);
        }
        if(CMD_NAME.toLowerCase() === 'setup_communication' && message.author.tag === 'Alejandro#1803'){
            bot.channels.cache.get(channel_Communication).send(message_Communication);
        }
        if(CMD_NAME.toLowerCase() === 'setup_labs' && message.author.tag === 'Alejandro#1803'){
            bot.channels.cache.get(channel_Labs).send(message_Labs);
        }
    }

})

bot.login(process.env.CSLA_EE_BOT);


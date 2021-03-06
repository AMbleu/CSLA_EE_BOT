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

//Discord IDs for the Welcome channel
const channel_Welcome       = '755279271211040769';
const message_Welcome       = 'Welcome to the CSULA EE Discord Server!\n\tIf you are not an EE, it is ok you can still make use of this server! I am a Senior EE student graduating in 2021. Seeing as I only have a year left, I wanted to leave something behind for my fellow EEs. I made a lot of friends here at Cal State LA and I want you to do the same.\n\tThis server is student made and student run! It is meant to connect engineering students to fellow classmates, conferences, tutoring, and much more. To make sure everyone is safe and this server doesn\'t get shutdown please follow all the rules, Rules are located in the #:white_check_mark:rules-and-information channel.\n\nHow to use this server:\n\t- Read the Rules on the #:white_check_mark\:rules-and-introduction Channel to gain access to the server\n\t- Second if you are an EE go to the "ENROLL TO DISCORD CLASSES" category to gain access to your classes individual chat area.\n\t- Explore the server\n\t- Join a Project\n\t- Become a member of a Club or Organization\n\t- Check out the STUDENT RESOURCES category\n\t- Last but not least TALK TO PEOPLE, ask for help, say hello, ask about their projects, their journey, anything.\n\t- We are all engineering students struggling with class, you are not alone. We are all in this together!';
const channel_rules         = '753026067131924501';
const message_rules         = 'CAL STATE LA EE DISCORD SERVER RULES\n----------------------------------------\nCore Rules:\n1. This server is not affiliated with the school. It is meant as a place where student can come and find resources and other students in their class to study and network with.\n2. DO NOT post any Test material or Quizzes on this server. Doing so will lead to you being banned and the files removed.\n3. Voice channels are meant for studying and socializing. Any use of a voice channel for discussing an ongoing exam is prohibited. Discussion of exam after exam time is fine.\n4. Real names must be used on this server. If your current name is your username then change your nickname on this server to your actual name. Failure to do so will result in being kicked.\n5. Do not give out any personal information\n6. Any bugs or glitches please report them in the "bug reports channel" under the "Student Resources" category\nAdded on Rules:\n7. Professors or Faculty may be invited to this Discord so try to keep it clean and not be rude.\n8. DO NOT use the @ everyone tag to message the entire server unless you have permission from the moderators. Doing so without permission will result in being kicked.\n\nRules for Classes:\n----------------------------------------\n1. Talk to each other!\n2. If you don\'t know something, ask! If no one has the answer go to the \"Tutor Request\" or \"Ask Question\" Channels and ask there.\n\nRules for Projects:\n----------------------------------------\n1. If you are interested in a project then follow the rules in that project chat to join the project.\n\nRules for Clubs and Organizations\n----------------------------------------\n1. If you see a club you like make sure you meet their criteria and use their contact method to contact them and join.\n\n\n**If you feel a rule needs to be added or clarified please notify the moderators and they will adjust it or add it if they feel it is necessary.';
const message_rulesConformation = 'Click on the checkmark reaction below to Confirm that you have read the rules and gain access the rest of the server!';
const message_rulesID       = '756987351871389777';
const channel_ModRules = '753701650643943456';
const message_ModRules = 'Who becomes Admins/Moderators:\n\t- There is only one Admin in the server, Admin privileges will be given to the standing IEEE HKN President.\n\t- If IEEE HKN no longer exist then the IEEE President will get the admin role\n\t- If IEEE and IEEE HKN no longer exist no admin will be apopinted\n\t- Moderator roles will be given only to IEEE HKN Members and All Presidents of Clubs and Organizations\n\nRules for Moderators/Admins:\n\t- Read the server rules!\n\t- Check in on club test chats and voice chats to make sure no one is breaking the rules\n\t- Check the bugs reports channel to make sure  everything is running fine if not contact me martinezalexmar@gmail.com\n\t- Kick people if necessary due to rule violation also feel free to warn them.\n\t- Answer people\'s questions on how to add or remove classes\n\t- If you want to learn how the bot works or the server works let me know!\n\t- If you are contacted by a Cal State LA Faculty, club/org president, grad student, or Cal State LA Alumni verify they are who they say they are and give them the appropriate role.';
const channel_faculty = '756605505018921170';
const message_faculty = 'Welcome to the student run Cal State LA Discord and thank you for joining!\nRules for Faculty:\n\t- As faculty you have access to faculty only chat room and voice channels located in the "----CAL STATE LA FACULTY----" category.\n\t- If you have any problems on the server contact the moderator and they will help you resolve it.\n\t- You can use your name or simply rename yourself EE Helper #xx if you wish to remain anonymous to others on this server.\n\t- The moderators on this server do our best to monitor for any cheating or sharing of documents but we may miss some if you see anything that would violate academic integrity please inform the moderators immediately and we will ban the student denying them the privilege of being on the server. ';


//Discord IDs Update if the Channel, Message, Role changes
const channelGeneral            = '752305862843826319';
const channel_general       = '753036544369229824';
const message_generalID         = '757040336525721611';
const channel_Communication = '753036948930560040';
const message_CommunicationID   = '756661321642147873';
const channel_Power	        = '753036805259132929';
const message_PowerID           = '756660351633719357';
const channel_Computers	    = '753036882983518248';
const message_ComputersID       = '756660266099277847';
const channel_Controls	    = '753037118313594890';
const message_ControlsID        = '756660171886952519';
const channel_Electronics	= '753037219182149736';
const message_ElectronicsID     = '756660083747717401';
const channel_Biomedical	= '753037166271266907';
const message_BiomedicalID      = '756659952810065982';
const channel_Labs	    	= '754799108845207652';
const message_LabsID            = '756667087304392797';
const channel_SeniorDesign  = '756183556757389402';
const message_SeniorDesignID    = '756189093364236288';
const message_general       = 'Welcome to the General Major Classes adding Channel\nTo get access to the class channel and other features please react with the appropriate emoji for your class:\nEE2040 - Circuit Analysis 1: :cloud_lightning: \nEE2440 - Digital Engineering: :man_technologist: \nEE2450 - Embedded 1: :computer: \nEE3000 - Economics for Engineers: :money_with_wings: \nEE3010 - Ethics and Professionalism in Engineering: :angel: \nEE3020 - Signal and Systems: :signal_strength: \nEE3030 - Circuit Analysis 2: :thunder_cloud_rain: \nEE3040 - Probability: :game_die: \nEE3050 - Electric and Magnetic Fields: :electric_plug:';
const message_Communication = 'Welcome to the Communication Specialty Classes adding Channel\nTo get access to the class channel and othe features please react with the appropriate emoji for your class:\nEE3200 - Analog Communication Systems: :sound: \nEE4200 - Digital Communications Systems: :loud_sound: \nEE4210 - Coding for Communications: :jigsaw: \nEE4220 - Digital Signals Processing: :notes: \nEE4230 - Antennas: :satellite: \nEE4240 - Fiberoptics: :flying_saucer: \nEE4250 - Digital Image Processing: :eyes:';
const message_Power         = 'Welcome to the Power Specialty Classes adding Channel\nTo get access to the class channel and other features please react with the appropriate emoji for your class: \nEE3300 - Electric Machines: :blue_car: \nEE4300 - Introduction to Power Systems Engineering: :steam_locomotive: \nEE4310 - Power System Analysis: :hammer: \nEE4320 - Electric Power Distribution: :man_factory_worker: \nEE4330 - Power Electronics: :race_car: \nEE4340 - Electromagnetic Energy Conversion: :magnet:';
const message_Computers     = 'Welcome to the Computer Specialty Classes adding Channel\nTo get access to the class channel and other features please react with the appropriate emoji for your class: \nEE3450 - Embedded System Programming 2: :computer: \nEE4400 - Data Communications and Networking: :file_folder: \nEE4420 - Multimedia Networking: :cd: \nEE4440 - Computer Organization: :smiling_imp: \nEE4450 - Embedded Architecture: :tram: \nEE4480 - Advanced Digital Design: :rocket:';
const message_Controls      = 'Welcome to the Controls Specialty Classes adding Channel\nTo get access to the class channel and other features please react with the appropriate emoji for your class: \nEE3600 - Controls Systems 1: :control_knobs: \nEE4600 - Controls Ststems 2: :goggles: \nEE4610 - Digital Controls Systems: :arrow_heading_up: \nEE4620 - Modern Controls Systems: :arrow_heading_down:';
const message_Electronics   = 'Welcome to the Electronics Specialty Classes adding Channel\nTo get access to the class channel and other features please react with the appropriate emoji for your class: \nEE3700 - Electronics 1: :cloud_lightning: \nEE3710 - Electronics 2: :signal_strength: \nEE3720 - Digital Electronics: :tv: \nEE4710 - Analog Integrated Circuits: :robot: \nEE4720 - CMOS VLSI Design: :pinching_hand: \nEE4730 - Optoelectronics: :brain:';
const message_Biomedical    = 'Welcome to the Biomedical Specialty Classes adding Channel\nTo get access to the class channel and other features please react with the appropriate emoji for your class: \nEE3810 - Sensors, Data Acquisition, and Instrumentation w/ Applicaiton in Biomedical Engineering: :heart: \nEE4810 - Biomedical Devices: :mechanical_leg: \nEE4820 - Biomedical Signal Processing: :brain:';
const message_Labs          = 'Welcome to the Labs adding Channel\nTo get access to the class channel and other features please react with the appropriate emoji for your class:\nEE2049 - Electrical Circuits and Measurements Laboratory: :cloud_lightning: \nEE2449 - Digital Logic Laboratory: :computer: \nEE3209 - Communications Laboratory: :microphone: \nEE3309 - Electromagnetic Energy Conversion Laboratory: :magnet: \nEE3709 - Electronics Laboratory: :robot: \nEE4229 - Digital Signals Processing Laboratory: :loud_sound: \nEE4689 - Control Systems Laboratory: :control_knobs:';
const message_SeniorDesign  ='Welcome to the Senior Design adding Channel\nTo get access to the class channel and other features please react with the emoji for the class:\n EE4961 & EE4962: :robot:';  

//Logs that The console is up and running on console
bot.on('ready', () => {
    console.log(`${bot.user.tag}`);
});

//Sends message to new users in the general chat
bot.on('guildMemberAdd', (member) => {
    bot.channels.cache.get(channelGeneral).send(`Welcome ${member.user} to the CSULA EE Server! Say Hello Everybody!`)
    .then(channel => console.log(channel.name))
    .catch(console.error);
    console.log(`${member.user.tag}`);
    member.send('Hello and Thank You for joining Cal State LA EE Discord Server\nIf you are a:\n\t- Cal State LA Faculty Member\n\t- Club or Organization President\n\t- Alumni\n\t- Grad Student\nPlease contact a Moderator so they can get you all set up!\nIf not then Hop back on the server and Enjoy!');
});

//I want the User to be assigned a role when they react to a specific message

bot.on('messageReactionAdd', (reaction, user) => {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    //Adds classes for the General Classes
    if(reaction.message.id === message_rulesID){
        switch(name){
            case '✅':
                member.roles.add('753034317692665916');//Add Unlocked role to gain access to server
            break;
        }
    }
    if(reaction.message.id === message_generalID){
        switch(name){
            case '🌩️':
                member.roles.add('752306609744773151');//Add EE2040 - Circuit Analysis 1
            break;
            case '👨‍💻':
                member.roles.add('752306751080104026');//Add EE2440 - Digital Engineering
            break;
            case '💻':
                member.roles.add('752316429633585167');//Add EE2450 - Embedded 1
            break;
            case '💸':
                member.roles.add('752316163077177384');//Add EE3000 - Econimics for Engineers
            break;
            case '👼':
                member.roles.add('752316848187506752');//Add EE3010 - Ethics and Professionalism in Engineering
            break;
            case '📶':
                member.roles.add('752315931249737818');//Add EE3020 - Signals and Systems
            break;
            case '⛈️':
                member.roles.add('752318332220473461');//Add EE3030 - Circuit Analysis 2
            break;
            case '🎲':
                member.roles.add('752315754573201420');//Add EE3040 - Probability
            break;
            case '🔌':
                member.roles.add('752315551942180945');//Add EE3050 - Electric Machines
            break;
        }
    }
    //Adds Classes for the Communications classes
    if(reaction.message.id === message_CommunicationID){
        switch(name){
            case '🔉':
                member.roles.add('752319284184875059');//Add EE3200 - Analog Communications Systems
            break;
            case '🔊':
                member.roles.add('752312925544513556');//Add EE4200 - Digital Communications Systems
            break;
            case '🧩':
                member.roles.add('752321545107669032');//Add EE4210 - Coding for Communications
            break;
            case '🎶':
                member.roles.add('752321338500448268');//Add EE4220 - Digital Signals Processing
            break;
            case '📡':
                member.roles.add('752321722648100876');//Add EE4230 - Antennas
            break;
            case '🛸':
                member.roles.add('752321987522723881');//Add EE4240 - Fiberoptics
            break;
            case '👀':
                member.roles.add('752322078665080914');//Add EE4250 - Digital Iamge Processing
            break;
        }
    }
    //Adds Classes for the Power classes
    if(reaction.message.id === message_PowerID){
        switch(name){
            case '🚙':
                member.roles.add('752315036604694539');//Add EE3300 - Electric Machines
            break;
            case '🚂':
                member.roles.add('752312721722179645');//Add EE4300 - Introduction to Power Systems Engineering
            break;
            case '🔨':
                member.roles.add('752312609382072393');//Add EE4310 - Power System Analysis
            break;
            case '👨‍🏭':
                member.roles.add('752312515370942515');//Add E4320 - Electric Power Distribution
            break;
            case '🏎️':
                member.roles.add('752311930823376927');//Add EE4330 - Power Electronics
            break;
            case '🧲':
                member.roles.add('752322334685396997');//Add EE4340 - Electromagnetic Energy Conversion
            break;
        }
    }
    //Adds Classes for the Computer classes
    if(reaction.message.id === message_ComputersID){
        switch(name){
            case '💻':
                member.roles.add('752314392049090622');//Add EE3450 - Embedded System Programming 2
            break;
            case '📁':
                member.roles.add('752311821456638023');//Add EE4400 - Data Communications and Networking
            break;
            case '💿':
                member.roles.add('752322550792716369');//Add EE4420 - Multimedia Networking
            break;
            case '😈':
                member.roles.add('752311721745580134');//Add EE4440 - Computer Organization
            break;
            case '🚊':
                member.roles.add('752311483630616646');//Add EE4450 - Embedded Architecture
            break;
            case '🚀':
                member.roles.add('752322754312798219');//Add EE4480 - Advanced Digital Design
            break;
        }
    }
    //Adds Classes for the Controls classes
    if(reaction.message.id === message_ControlsID){
        switch(name){
            case '🎛️':
                member.roles.add('752319594127163452');//Add EE3600 - Controls Systems 1
            break;
            case '🥽':
                member.roles.add('752311367830208633');//Add EE4600 - Controls Ststems 2
            break;
            case '⤴️':
                member.roles.add('752322956071534643');//Add EE4610 - Digital Controls Systems
            break;
            case '⤵️':
                member.roles.add('752308309356183563');//Add EE4620 - Modern Controls Systems
            break;
        }
    }
    //Adds Classes for the Electronics classes
    if(reaction.message.id === message_ElectronicsID){
        switch(name){
            case '🌩️':
                member.roles.add('752319826843926529');//Add EE3700 - Electronics 1
            break;
            case '📶':
                member.roles.add('752314214894403625');//Add EE3710 - Electronics 2
            break;
            case '📺':
                member.roles.add('752320118263906334');//Add EE3720 - Digital Electronics
            break;
            case '🤖':
                member.roles.add('752307518482546768');//Add EE4710 - Analog Integrated Circuits:
            break;
            case '🤏':
                member.roles.add('752323229716185228');//Add EE4720 - CMOS VLSI Design
            break;
            case '🧠':
                member.roles.add('752323341041270805');//Add EE4730 - Optoelectronics
            break;
        }
    }
    //Adds Classes for the Biomedical classes
    if(reaction.message.id === message_BiomedicalID){
        switch(name){
            case '❤️':
                member.roles.add('752313758767906828');//Add EE3810 - Sensors, Data Acquisition, and Instrumentation w/ Applicaiton in Biomedical Engineering
            break;
            case '🦿':
                member.roles.add('752307264441942096');//Add EE4810 - Biomedical Devices
            break;
            case '🧠':
                member.roles.add('752323493512609862');//Add EE4820 - Biomedical Signal Processing
            break;
        }
    }
    //Adds Classes for the Labs
    if(reaction.message.id === message_LabsID){
        switch(name){
            case '🌩️':
                member.roles.add('752316957063250021');//Add EE2049 - Electrical Circuits and Measurments Labratory
            break;
            case '💻':
                member.roles.add('752316590560641114');//Add EE2449 - Digital Logic Labratory
            break;
            case '🎤':
                member.roles.add('752315151532949575');//Add EE3209 - Communications Labratory
            break;
            case '🧲':
                member.roles.add('752314646777561148');//Add EE3309 - Electromagnetic Energy Conversion Labratory
            break;
            case '🤖':
                member.roles.add('752314307882123345');//Add EE3709 - Electronics Labratory
            break;
            case '🔊':
                member.roles.add('752323821142278295');//Add EE4229 - Digital Signals Processing Labratory
            break;
            case '🎛️':
                member.roles.add('752307844962844753');//Add EE4689 - Control Systems Labratory
            break;
        }
    }
    if(reaction.message.id === message_SeniorDesignID){
        switch(name){
            case '🤖':
                member.roles.add('752307128303091724');//remove Unlocked role to gain access to server
            break;
        }
    }

})
//Removes Roles when user removes the reaction
bot.on('messageReactionRemove', (reaction, user) => {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    //Adds classes for the General Classes
    if(reaction.message.id === message_rulesID){
        switch(name){
            case '✅':
                member.roles.remove('753034317692665916');//remove Unlocked role to gain access to server
            break;
        }
    }
    if(reaction.message.id === message_generalID){
        switch(name){
            case '🌩️':
                member.roles.remove('752306609744773151');//remove EE2040 - Circuit Analysis 1
            break;
            case '👨‍💻':
                member.roles.remove('752306751080104026');//remove EE2440 - Digital Engineering
            break;
            case '💻':
                member.roles.remove('752316429633585167');//remove EE2450 - Embedded 1
            break;
            case '💸':
                member.roles.remove('752316163077177384');//remove EE3000 - Econimics for Engineers
            break;
            case '👼':
                member.roles.remove('752316848187506752');//remove EE3010 - Ethics and Professionalism in Engineering
            break;
            case '📶':
                member.roles.remove('752315931249737818');//remove EE3020 - Signals and Systems
            break;
            case '⛈️':
                member.roles.remove('752318332220473461');//remove EE3030 - Circuit Analysis 2
            break;
            case '🎲':
                member.roles.remove('752315754573201420');//remove EE3040 - Probability
            break;
            case '🔌':
                member.roles.remove('752315551942180945');//remove EE3050 - Electric Machines
            break;
        }
    }
    //Adds Classes for the Communications classes
    if(reaction.message.id === message_CommunicationID){
        switch(name){
            case '🔉':
                member.roles.remove('752319284184875059');//remove EE3200 - Analog Communications Systems
            break;
            case '🔊':
                member.roles.remove('752312925544513556');//remove EE4200 - Digital Communications Systems
            break;
            case '🧩':
                member.roles.remove('752321545107669032');//remove EE4210 - Coding for Communications
            break;
            case '🎶':
                member.roles.remove('752321338500448268');//remove EE4220 - Digital Signals Processing
            break;
            case '📡':
                member.roles.remove('752321722648100876');//remove EE4230 - Antennas
            break;
            case '🛸':
                member.roles.remove('752321987522723881');//remove EE4240 - Fiberoptics
            break;
            case '👀':
                member.roles.remove('752322078665080914');//remove EE4250 - Digital Iamge Processing
            break;
        }
    }
    //Adds Classes for the Power classes
    if(reaction.message.id === message_PowerID){
        switch(name){
            case '🚙':
                member.roles.remove('752315036604694539');//Add EE3300 - Electric Machines
            break;
            case '🚂':
                member.roles.remove('752312721722179645');//Add EE4300 - Introduction to Power Systems Engineering
            break;
            case '🔨':
                member.roles.remove('752312609382072393');//Add EE4310 - Power System Analysis
            break;
            case '👨‍🏭':
                member.roles.remove('752312515370942515');//Add E4320 - Electric Power Distribution
            break;
            case '🏎️':
                member.roles.remove('752311930823376927');//Add EE4330 - Power Electronics
            break;
            case '🧲':
                member.roles.remove('752322334685396997');//Add EE4340 - Electromagnetic Energy Conversion
            break;
        }
    }
    //Adds Classes for the Computer classes
    if(reaction.message.id === message_ComputersID){
        switch(name){
            case '💻':
                member.roles.remove('752314392049090622');//remove EE3450 - Embedded System Programming 2
            break;
            case '📁':
                member.roles.remove('752311821456638023');//remove EE4400 - Data Communications and Networking
            break;
            case '💿':
                member.roles.remove('752322550792716369');//remove EE4420 - Multimedia Networking
            break;
            case '😈':
                member.roles.remove('752311721745580134');//remove EE4440 - Computer Organization
            break;
            case '🚊':
                member.roles.remove('752311483630616646');//remove EE4450 - Embedded Architecture
            break;
            case '🚀':
                member.roles.remove('752322754312798219');//remove EE4480 - Advanced Digital Design
            break;
        }
    }
    //Adds Classes for the Controls classes
    if(reaction.message.id === message_ControlsID){
        switch(name){
            case '🎛️':
                member.roles.remove('752319594127163452');//remove EE3600 - Controls Systems 1
            break;
            case '🥽':
                member.roles.remove('752311367830208633');//remove EE4600 - Controls Ststems 2
            break;
            case '⤴️':
                member.roles.remove('752322956071534643');//remove EE4610 - Digital Controls Systems
            break;
            case '⤵️':
                member.roles.remove('752308309356183563');//remove EE4620 - Modern Controls Systems
            break;
        }
    }
    //Adds Classes for the Electronics classes
    if(reaction.message.id === message_ElectronicsID){
        switch(name){
            case '🌩️':
                member.roles.remove('752319826843926529');//remove EE3700 - Electronics 1
            break;
            case '📶':
                member.roles.remove('752314214894403625');//remove EE3710 - Electronics 2
            break;
            case '📺':
                member.roles.remove('752320118263906334');//remove EE3720 - Digital Electronics
            break;
            case '🤖':
                member.roles.remove('752307518482546768');//remove EE4710 - Analog Integrated Circuits:
            break;
            case '🤏':
                member.roles.remove('752323229716185228');//remove EE4720 - CMOS VLSI Design
            break;
            case '🧠':
                member.roles.remove('752323341041270805');//remove EE4730 - Optoelectronics
            break;
        }
    }
    //Adds Classes for the Biomedical classes
    if(reaction.message.id === message_BiomedicalID){
        switch(name){
            case '❤️':
                member.roles.remove('752313758767906828');//remove EE3810 - Sensors, Data Acquisition, and Instrumentation w/ Applicaiton in Biomedical Engineering
            break;
            case '🦿':
                member.roles.remove('752307264441942096');//remove EE4810 - Biomedical Devices
            break;
            case '🧠':
                member.roles.remove('752323493512609862');//remove EE4820 - Biomedical Signal Processing
            break;
        }
    }
    //Adds Classes for the Labs
    if(reaction.message.id === message_LabsID){
        switch(name){
            case '🌩️':
                member.roles.remove('752316957063250021');//remove EE2049 - Electrical Circuits and Measurments Labratory
            break;
            case '💻':
                member.roles.remove('752316590560641114');//remove EE2449 - Digital Logic Labratory
            break;
            case '🎤':
                member.roles.remove('752315151532949575');//remove EE3209 - Communications Labratory
            break;
            case '🧲':
                member.roles.remove('752314646777561148');//remove EE3309 - Electromagnetic Energy Conversion Labratory
            break;
            case '🤖':
                member.roles.remove('752314307882123345');//remove EE3709 - Electronics Labratory
            break;
            case '🔊':
                member.roles.remove('752323821142278295');//remove EE4229 - Digital Signals Processing Labratory
            break;
            case '🎛️':
                member.roles.remove('752307844962844753');//remove EE4689 - Control Systems Labratory
            break;
        }
    }
    if(reaction.message.id === message_SeniorDesignID){
        switch(name){
            case '🤖':
                member.roles.remove('752307128303091724');//remove Unlocked role to gain access to server
            break;
        }
    }

})


//Future Commands


bot.on('message', async (message) => {
    if (message.author.bot) return;//Prevent Bot from responding to other bots
    //Processes commands
    if(message.content.startsWith(CMD_PREFIX)){
        //message.channel.send('Test Recieved');
        const [CMD_NAME, ...args ] = message.content.trim().substring(CMD_PREFIX.length).split(/\s+/);

        //Commands below should only be used if you know exactly what they do!
        if(CMD_NAME.toLowerCase() === 'setup_rules' && message.author.tag === 'Alejandro#1803'){
            bot.channels.cache.get(channel_rules).send(message_rules);
            bot.channels.cache.get(channel_rules).send(message_rulesConformation);
        }
        if(CMD_NAME.toLowerCase() === 'setup_faculty' && message.author.tag === 'Alejandro#1803'){
            bot.channels.cache.get(channel_faculty).send(message_faculty);
        }
        if(CMD_NAME.toLowerCase() === 'setup_modrules' && message.author.tag === 'Alejandro#1803'){
            bot.channels.cache.get(channel_ModRules).send(message_ModRules);
        }
        if(CMD_NAME.toLowerCase() === 'setup_welcome' && message.author.tag === 'Alejandro#1803'){
            bot.channels.cache.get(channel_Welcome).send(message_Welcome);
        }
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
        if(CMD_NAME.toLowerCase() === 'setup_seniordesign' && message.author.tag === 'Alejandro#1803'){
            bot.channels.cache.get(channel_SeniorDesign).send(message_SeniorDesign);
        }
    }

})

bot.login(process.env.CSLA_EE_BOT);

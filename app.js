const discord = require('discord.js');
const eventNames =  ['ready', 'reconnecting'];

//create a client using raw keyword 
const client = new discord.Client();
const 
{
    token
} = require("./token.json");

//display message when bot connects online 
client.on( eventNames[0],
    () => {
        console.log(`hi, i'm here ${client.user.tag}!`);
    }
);

// check for new messages 
client.on("message", (msg) => {
    console.log(msg.content);
    const _msg = msg.content.toLocaleLowerCase(); 
    if ( msg.author.bot ) return;
    var channel = msg.channel;

    if (_msg === `!help`)
    {
        channel.send(
            `
\`\`\`
!prob.{userid} : 유저가 등록한 문제 셋을 출력합니다.
!help : 봇 도움말을 출력합니다.
\`\`\`
            `
        );
    }
    else 
    {
        channel.send('^_^');
    }
});

client.login(token);
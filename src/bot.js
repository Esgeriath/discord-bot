require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "$";

client.on('ready', () => console.log(`${client.user.tag}: ready.`));

client.on('message', message => {
    // optional: ignore bots
    // if (message.author.bot) return;
    console.log(`[${message.author}]: ${message.content}`);
    // handling commands
    if (message.content.startsWith(PREFIX)) {
        const [commandName, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
        console.log(commandName, args);
        return;
    }
    // handling custom responses
    if (message.content === 'ping') {
        message.channel.send('pong')
    }
});

client.on('messageReactionAdd', (raection, user) => {
});

client.login(process.env.DISCORD_BOT_TOKEN);
const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong!');
  }
});

client.login('Njk5MTg1NjQ1Nzk2NTg5NTk4.XpQx7w.a4Qi81LDDc0E_74nouzB7wT0olo');
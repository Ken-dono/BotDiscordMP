// event message
module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.content.indexOf(client.PREFIX) !== 0) return;
  const args = message.content.slice(client.PREFIX.lenght).trim().split(/ +/g);
  const command = args.shift().tolowerCase();
};

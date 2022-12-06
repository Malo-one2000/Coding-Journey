// inside a command, event listener, etc.
const helpEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Help')
	.setDescription('A menu with all of the commands and some more context.')
	.addFields(
		{ name: 'Ping', value: 'Sends back with a pong.', inline: true},
		{ name: 'User', value: 'Tells you a bit about the user. ', inline: true },
		{ name: 'Server', value: 'Tells you a bit more about the server.', inline: true },
	)
	.setTimestamp()
	.setFooter({ text: 'Thanks for using my bot'});

channel.send({ embeds: [helpEmbed] });
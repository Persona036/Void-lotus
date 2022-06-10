
module.exports  = {
callback: (message, ...args) => {
const quiz = require('../quiz.json');
// ...
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};

message.reply({ content: item.question, fetchReply: true })
	.then(() => {
		message.channel.awaitMessages({ filter, max: 1, time: 30000, errors: ['time'] })
			.then(collected => {
				message.reply(`${collected.first().author} got the correct answer!`);
			})
			.catch(collected => {
			    message.reply('Looks like nobody got the answer this time.');
			});
	});


}


}

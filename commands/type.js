
module.exports  = {
callback: (message, ...args) => {
const quiz = require('../json/type.json');
// ...
const item = quiz[Math.floor(Math.random() * quiz.length)];
const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};

message.reply({ content: item.question, fetchReply: true })
	.then(() => {
        const start = Date.now();
		message.channel.awaitMessages({ filter, max: 1, time: 1000000, errors: ['time'] })
			.then(collected => {
                const duration = (Date.now() - start)/1000;
				message.reply(`${collected.first().author} wrote the answer in ${duration}s`);
			})
			.catch(collected => {
			    message.reply('Looks like nobody got the answer this time.');
			});
	});


}


}

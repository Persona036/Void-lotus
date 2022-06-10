console.log('help')

const DJS = require('discord.js')
const { Intents } = DJS
require('dotenv/config')

const client = new DJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.on('ready', () => {
  console.log('Running')
    let handler = require('./command-handler')
    if (handler.default) handler = handler.default

    handler(client)
  })

client.login(process.env.TOKEN)

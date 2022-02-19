let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let url = global.API('xteam', '/randomimage/meme', {}, 'APIKEY')
    await conn.sendFile(m.chat, url, '', 'seperti ini kau bilang meme?', m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^(meme)$/i
handler.limit = true

module.exports = handler

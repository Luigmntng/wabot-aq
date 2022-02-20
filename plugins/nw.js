let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://restapi-production-a62b.up.railway.app/api/nsfw/manga?apikey=APIKEY`)).buffer(), 'Afah antum birahi sama Kartun ?', footer, 'Kyaa (>////<)', `.nsfwmanga`, m)

}

handler.help = ['nsfwmanga']
handler.tags = ['premium']
handler.command = /^(nsfwmanga)$/i
handler.register = true

handler.premium = true

module.exports = handler

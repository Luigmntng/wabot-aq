let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://restapi-production-a62b.up.railway.app/api/wallpaper/gaming?apikey=APIKEY`)).buffer(), 'Udah kak Jgn Lupa Follow ig @ahmdlui', footer, 'iya bangh hehe', `.gamingwall`, m)

}

handler.help = ['gamingwall']
handler.tags = ['wall']
handler.command = /^(gamingwall)$/i
handler.register = true

handler.limit = true

module.exports = handler

let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://restapi-production-a62b.up.railway.app/api/wallpaper/anime?apikey=APIKEY`)).buffer(), 'Nih kak Jgn Lupa Follow ig @ahmdlui', footer, 'Makasih Bot >///<', `.animwallpaper`, m)

}

handler.help = ['animkwallpaper']
handler.tags = ['wall']
handler.command = /^(animwallpaper)$/i
handler.register = true

handler.limit = true

module.exports = handler


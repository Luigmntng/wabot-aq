let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://restapi-production-a62b.up.railway.app/api/nsfw/panties?apikey=APIKEY`)).buffer(), 'Hayoo Ngapain pegang tytd Banh?', footer, 'Get Dosa Again', `.nsfwpantsu`, m)

}

handler.help = ['nsfwpantsu']
handler.tags = ['premium']
handler.command = /^(nsfwpantsu)$/i
handler.register = true

handler.premium = true

module.exports = handler

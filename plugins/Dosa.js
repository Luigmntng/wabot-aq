let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await fetch(API('https://hmtai.herokuapp.com', '/nsfw/' + command, {}))
	if (!res.ok) throw `${res.status} ${res.statusText}`
	let json = await res.json()
	if (json.url) {
		let buffer = await (await fetch(json.url)).buffer()
		await conn.sendMessage(m.chat, {
			contentText: 'Random Image',
			footerText: command,
			buttons: [
				{ buttonId: usedPrefix + command, buttonText: { displayText: 'Get Dosa Again' }, type: 1 }
			],
			headerType: 'IMAGE',
			imageMessage: (await conn.prepareMessageMedia(buffer, 'imageMessage', {})).imageMessage
		}, 'buttonsMessage', { quoted: m })
	} else throw json
}
handler.help = ['ass', 'bdsm', 'blowjob', 'boobjob', 'cum', 'creampie', 'cuckold', 'ero', 'elves', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'incest', 'masturbation', 'pantsu', 'orgy', 'tentacles', 'thighs', 'uniform', 'vagina', 'yuri' ]
handler.tags = ['dosa']
handler.command = /^(ass|bdsm|blowjob|boobjob|cum|creampie|cuckold|ero|elves|femdom|foot|gangbang|glasses|hentai|incest|masturbation|pantsu|orgy|tentacles|thighs|uniform|vagina|yuri)$/i

handler.premium = true

handler.fail = null
handler.limit = false
module.exports = handler

let fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await fetch(API('https://restapi-production-a62b.up.railway.app/api', '/wallpaper/' + command, {}, '?apikey=APIKEY'))
	if (!res.ok) throw `${res.status} ${res.statusText}`
	let json = await res.json()
	let {
	result
	} = json
		let img = await img(null, result, )
		 conn.sendMessage(m.chat, {
			contentText: 'Random Image',
			footerText: command,
			buttons: [
				{ buttonId: usedPrefix + command, buttonText: { displayText: 'Get Again' }, type: 1 }
			],
			headerType: 'IMAGE',
			imageMessage: (await conn.prepareMessageMedia(buffer, 'imageMessage', {})).imageMessage
		}, 'buttonsMessage', { quoted: m })
	} else throw json
}
handler.help = ['yotsuba', 'shinomiya', 'yumeko', 'tejina', 'chiho', 'boruto', 'kaori', 'shizuka', 'kaga', 'kotori', 'mikasa', 'akiyama', 'gremory', 'isuzu', 'shina', 'kagura', 'shinka', 'eba', 'elaina', 'yuri', 'erza', 'hinata', 'minato', 'Naruto', 'Sagiri', 'nezuko', 'rize', 'Anna', 'Deidara', 'Yuki', 'Anna', 'Asuna', 'Ayuzawa', 'Chitoge', 'Emilia', 'hestia', 'inori', 'itachi', 'Madara', 'sakura', 'Sasuke', 'Tsunade', 'onepiece']
handler.tags = ['wibu']
handler.command = /^(yotsuba|shinomiya|yumeko|tejina|chiho|boruto|kaori|shizuka|kaga|kotori|mikasa|akiyama|gremory|isuzu|shina|kagura|shinka|eba|elaina|erza|hinata|minato|naruto|sagiri|nezuko|rize|anna|deidara|yuki|anna|asuna|ayuzawa|chitoge|emilia|hestia|inori|itachi|madara|sakura|sasuke|tsunade|onepiece)$/i
module.exports = handler

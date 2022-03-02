let handler = m => m
let levelling = require('../lib/levelling')
handler.before = m => {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup) return
    if (m.sender === global.conn.user.jid) return
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let nani = 'https://telegra.ph/file/04e443fbac9d2393f36e0.jpg'
  await conn.sendButtonLoc(m.chat, await (await fetch(nani)).buffer(), `
╭─❑ 「 Level Up 」 ❑─
╠➥*Nama* : ${conn.getName(m.sender)}
╠➥*Role* :%role
╰*Level* : *${before}* ➥ *${user.level}*
`.trim(), '', 'Profile', '.profile')
 false, {
            contextInfo: {
                mentionedJid: [m.sender]
            }
        })
    }
    return true
}
 
module.exports = handler



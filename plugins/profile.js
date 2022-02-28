let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let fs = require('fs')

let handler  = async (m, { conn, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let nama = conn.getName(m.sender)
try {
  } catch (e) {

  } finally {
await m.reply(global.wait)
let res = global.API('https://hardianto.xyz', '/api/rankcard', {
    profile: await conn.getProfilePicture(m.sender).catch(_ => ''),
    name: nama,
    bg: 'https://telegra.ph/file/217711c225d83722a85af.jpg',
    needxp: max,
    curxp: exp,
    level: level,
    logorank: await conn.getProfilePicture(m.chat).catch(_ => '')
  })
await conn.sendButtonLoc(m.chat, await (await fetch(res)).buffer(), `
*👾 Your Profile:*
*👤 Name:* ${nama}
*⚜️ Rank:* ${role}
*🔰 Level:* ${level}
*🔗 Exp :* ${exp} --> ${max}
`.trim(), footer, 'Back', `.menu`)
} 
    
    }

handler.command = /^(profile|profile)$/i
//Semoga di acc >\\<
handler.register = true
handler.fail = null

module.exports = handler

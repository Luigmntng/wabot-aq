let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let levelling = require('../lib/levelling')
const thumb = fs.readFileSync('./gambar1.jpeg')
let thumb1 = 'https://telegra.ph/file/9e7c12f1c453608c2cf3a.jpg'

let tags = {
  'main': '𝑴𝒂𝒊𝒏',
  'game': '𝑮𝒂𝒎𝒆',
  'rpg': '𝑹𝒑𝒈[percobaan]',
  'xp': '𝑬𝒙𝒑 & 𝑳𝒊𝒎𝒊𝒕',
  'sticker': '𝑺𝒕𝒊𝒄𝒌𝒆𝒓',
  'kerang': '𝑲𝒆𝒓𝒂𝒏𝒈 𝑨𝒋𝒂𝒊𝒃',
  'quotes': '𝑸𝒖𝒐𝒕𝒆𝒔',
  'admin': '𝑨𝒅𝒎𝒊𝒏',
  'group': '𝑮𝒓𝒐𝒖𝒑',
  'premium': '𝑷𝒓𝒆𝒎𝒊𝒖𝒎',
  'internet': '𝑰𝒏𝒕𝒆𝒓𝒏𝒆𝒕',
  'anonymous': '𝑨𝒏𝒐𝒏𝒚𝒎𝒐𝒖𝒔 𝑪𝒉𝒂𝒕',
  'nulis': '𝑴𝒂𝒈𝒆𝒓𝑵𝒖𝒍𝒊𝒔 & 𝑳𝒐𝒈𝒐',
  'wall': '𝑹𝒂𝒏𝒅𝒐𝒎 𝑾𝒂𝒍𝒍𝒑𝒂𝒑𝒆𝒓',
  'downloader': '𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅𝒆𝒓',
  'wibu': '𝑾𝒊𝒃𝒖',
  'tools': '𝑻𝒐𝒐𝒍𝒔',
  'fun': '𝑭𝒖𝒏',
  'dosa': '𝑵𝒔𝒇𝒘 𝑴𝒆𝒏𝒖',
  'database': '𝑫𝒂𝒕𝒂𝒃𝒂𝒔𝒆',
  'vote': '𝑽𝒐𝒕𝒊𝒏𝒈',
  'absen': '𝑨𝒃𝒔𝒆𝒏',
  'quran': '𝑨𝒍 𝑸𝒖𝒓\'𝒂𝒏',
  'jadibot': '𝑱𝒂𝒅𝒊 𝑩𝒐𝒕',
  'owner': '𝑶𝒘𝒏𝒆𝒓',
  'host': '𝑯𝒐𝒔𝒕',
  'advanced': '𝑨𝒅𝒗𝒂𝒏𝒄𝒆𝒅',
  'info': '𝑰𝒏𝒇𝒐',
  '': '𝑵𝒐 𝑪𝒂𝒕𝒆𝒈𝒐𝒓𝒚',
}
const defaultMenu = {
  before: `
┏━━⬣ꕥ %me ꕥ━━━━
┃⬡📊 *Version*: %version
┃⬡🗃️ *Lib*: Baileys-MD
┃⬡🧪 *Mode:* ${global.opts['self'] ? 'Self' : 'publik'}
┃⬡⏰ *Uptime:* %uptime
┗⬣
┏━━⬣ 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍
┃⬡ 📇 *Name*:  %name 
┃⬡ 🆔 *Status*: ---
┃⬡ 🎫 *Limit*: %limit
┃⬡ ✨ *Exp*: %totalexp
┃⬡ 📊 *Level*: %level
┃⬡ 📍 *Role*: %role
┃⬡ 💲Premium : ${global.prem ? '✅' : '❌'}
┗⬣
┏━━⬣ 𝙄𝙉𝙁𝙊 𝙎𝙏𝘼𝙏𝙐𝙎

┃⬡ _*SC Ori = github.com/Rteam1/wabot-aq*_

┗⬣
╭─❑ 「 INFORMASI 」 ❑──
┃⬡ github : github.com/luigmntng
┃⬡ instagram : instagram.com/ahmdlui
┃⬡ jika ada yg eror alhamdulillah
┗⬣
%readmore`.trimStart(),
  header: '┏┉┄┈┈┈『%category』┈┈┈┈┈┉┓',
  body: '┆➜ %cmd %islimit %isPremium',
  footer: '└┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour12: false
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    //Iya bang sy nub
    const reply = {
    key: {
        participant: '0@s.whatsapp.net'
    },
    message: {
        orderMessage: {
            itemCount: 1122334455,
            itemCoun: 404,
            surface: 404,
            message: `© ${conn.user.name}`,
            orderTitle: 'B',
            thumbnail: thumb,
            sellerJid: '0@s.whatsapp.net'
        }
    }
}
let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6282146092695@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `Relldev`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN: Rlxfly UwU\nitem1.TEL;waid=6282146092695:6282146092695\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
conn.send3ButtonLoc(m.chat, thumb, `Hi! Beban Im ${conn.user.name}\n\nHere my menu...`, text.trim(), footer, 'Click Here !!', '.owner', 'sumbangannya Om', '.donasi', 'CecakBotZ', '.ping', reply)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.register = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3


module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}


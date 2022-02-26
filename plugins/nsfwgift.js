let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {
  let res = await fetch(global.API('https://restapi-production-a62b.up.railway.app/api', '/nsfw/gifs?apikey=APIKEY'))
  let json = await res.json()
  let {
  result
  } = json
  let stiker = await sticker(null, result, global.packname, global.author)
  if (stiker) return conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
    })
 } catch (e) {
  }
}
handler.help = ['nsfwgift']
handler.tags = ['premium']
handler.customPrefix = /^nsfwgift$/i
handler.command = new RegExp

module.exports = handler


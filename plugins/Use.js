let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) =>  {
	if (!db.data.chats[m.chat].rpg && m.isGroup) throw global.rpg
    let msgerror = (pickRandom(['Error', 'astagfirullah error', 'Nice Error', 'Salah format keknya :v', 'error bro', 'Kocak error :v', 'wtf error :v', 'Ciaaa error', 'error cuyy', 'dahlah (emot batu) error']))
    try {
        let msgkurang = (pickRandom(['Jamumu tidak cukup', 'ciaa gk cukup Jamuyya :v', 'wtf gk cukup :v', 'beli Jamu dulu, Jamumu gk cukup', 'Duaarr Jamumu gk cukup', 'eyyyy Jamumu kurang', 'beli dulu lah, masak mau pakai Jamu tapi gk ada Jamunnya :v', 'minta ke orang lain suruh transfer Jamu, biar Jamumu gk kurang :v', 'Beli Jamu dulu KK']))
        let msgpenuh = (pickRandom(['Nyawamu sudah penuh', 'coba deh liat inv mu, nyawamu kan dah 100 ngapai ngunain Jamu lagi?', 'health mu dah penuh woyy', 'ws kebek weh :v', 'nyawamu dah penuh :v', 'udh weh, udh penuh']))
        let kucing = global.db.data.users[m.sender].kucing
        let useJamu = (kucing == 0 ? 40 : '' || kucing == 1 ? 45 : '' || kucing == 2 ? 50 : '' || kucing == 3 ? 55 : '' || kucing == 4 ? 60 : '' || kucing == 5 ? 65 : '' || kucing == 6 ? 70 : '' || kucing == 7 ? 75 : '' || kucing == 8 ? 80 : '' || kucing == 9 ? 85 : '' || kucing == 10 ? 90 : '')
        let healt = global.db.data.users[m.sender].healt
        if (/use|pakai/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / useJamu)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / useJamu)), 1)
                 let msgsucces = (pickRandom(['success memakai', 'Nice succes menggunakan', 'berhasil meminum ', 'primitif anda menggunakan', 'anda memakai', 'Anda menggunakan']) + ' *' + (count * 1) + '* Jamu')
                 if (args[0] === 'Jamu') {
                    if (global.db.data.users[m.sender].healt < 100) {
                        if (global.db.data.users[m.sender].Jamu >= count * 1) {
                            global.db.data.users[m.sender].Jamu -= count * 1
                            global.db.data.users[m.sender].healt += useJamu * count
                            conn.reply(m.chat, msgsucces, m)
                        } else conn.reply(m.chat, msgkurang, m)
                    } else conn.reply(m.chat, msgpenuh, m)
                } else if (args.length > 2 && args[0] === !'Jamu') m.reply(pickRandom(['Hanya bisa menggunakan Jamu', 'Mau ngunain apa? Cuma bisa gunain Jamu :v', 'Wih mau gunain apa kamu, kan hanya bisa Jamu', 'Waduheck, hanya bisa Jamu', 'lah, mau gunain apa?, kan hanya bisa Jamu']) + '\nContoh penggunaan: *' + usedPrefix + 'Jamu 1*')
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
                if (DevMode) {
                    let file = require.resolve(__filename)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                    }
                }
            }
        } else if (/heal/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / useJamu)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / useJamu)), 1)
                let msgsucces = (pickRandom(['success memakai', 'Nice succes menggunakan', 'berhasil meminum ', 'primitif anda menggunakan', 'anda memakai', 'Anda menggunakan']) + ' *' + (count * 1) + '* Jamu')
                if (global.db.data.users[m.sender].healt < 100) {
                    if (global.db.data.users[m.sender].Jamu >= count * 1) {
                        global.db.data.users[m.sender].Jamu -= count * 1
                        global.db.data.users[m.sender].healt += useJamu * count
                        conn.sendButton(m.chat, msgsucces, footer, 'Adventure', `${usedPrefix}mulung`, m, { contextInfo: { forwardingScore: 999, isForwarded: true }})

                    } else conn.reply(m.chat, msgkurang, m)
                } else conn.reply(m.chat, msgpenuh, m)
            } catch (e) {
                console.log(e)
                m.reply(msgerror)
                if (DevMode) {
                    let file = require.resolve(__filename)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                    }
                }
            }
        }
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, msgerror, m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['use <item> <jumlah>', 'heal']
handler.tags = ['rpg']
handler.command = /^(use|heal)$/i

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

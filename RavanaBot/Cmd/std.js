const RAVANA = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../../config');
const Down = 'Status Download...💫.'

    RAVANA.useCmd({pattern: 'std$', fromMe: true }, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var downloading = await message.client.sendMessage(message.jid,Down,MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        if (message.reply_message.video === false && message.reply_message.image) {
            ffmpeg(location)
                .save('RAVANA.png')
                .on('end', async () => {
                    await message.client.sendMessage(message.client.user.jid,fs.readFileSync('RAVANA.png'), MessageType.image,{mimetype: Mimetype.png, caption: '🎯RAVANA BOT' ,quoted: message.data});
            });
        return 
        }

        ffmpeg(location)
            .save('RAVANA.mp4')
            .on('end', async () => {
                await message.client.sendMessage(message.client.user.jid,fs.readFileSync('RAVANA.mp4'), MessageType.video,{mimetype: Mimetype.mp4, caption: '🎯RAVANA BOT' ,quoted: message.data});
            });
        return 
    }));

//RAVANA SL | 2021
//Credit - Hiruwa

const RAVANA = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');
const fs = require('fs');
const {uploadByBuffer} = require('cobrabot-patch')
const ffmpeg = require('fluent-ffmpeg');
const need = 'Please Reply a photo ( ෆොටෝ එකකට රිප්ලයි කරන්න )'
const {execFile} = require('child_process');



RAVANA.addrex({pattern: 'tpu ?(.*)', fromMe: true,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    

    if (!message.reply_message) return await message.client.sendMessage(message.jid, need, MessageType.text);

var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
  


    ffmpeg(location)
        .save('RAVANA.jpg')
        .on('end', async () => {
        
        var geturl = await uploadByBuffer(fs.readFileSync('RAVANA.jpg' ), 'image/jpg')
        
        await message.client.sendMessage(message.jid,'SUCCSESFUL UPLOADED LINK IS->\n\n'+ geturl.link , MessageType.text)
        });
        

}));


if (Config.WORKTYPE == 'public') {
    
    
    
    RAVANA.addrex({pattern: 'tpu ?(.*)', fromMe: false,  deleteCommand: true,  desc: 'short cut'}, (async (message, match) => {    

    if (!message.reply_message) return await message.client.sendMessage(message.jid, need, MessageType.text);

var location = await message.client.downloadAndSaveMediaMessage({
        key: {
            remoteJid: message.reply_message.jid,
            id: message.reply_message.id
        },
        message: message.reply_message.data.quotedMessage
    });
  


    ffmpeg(location)
        .save('RAVANA.jpg')
        .on('end', async () => {
        
        var geturl = await uploadByBuffer(fs.readFileSync('RAVANA.jpg' ), 'image/jpg')
        
        await message.client.sendMessage(message.jid,'SUCCSESFUL UPLOADED LINK IS->\n\n'+ geturl.link , MessageType.text)
        });
        

}));
    
    }

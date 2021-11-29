//RAVANA SL | 2021 

let RAVANA = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let axios = require('axios');
let Config = require('../../config');

let GD = "DOWNLOAD APK GOOGLE DRIVE"
let APD = "DOWNLOADING..."
let APN = "NEED LINK"
let APU = "*UPLOADING...*"
let APF = "*⚙️CAN'T FIND☹️*"

let dt = Config.WORKTYPE == 'public' ? false : true


 RAVANA.useCmd({ pattern: 'mapk ?(.*)', fromMe: dt, desc: GD,  deleteCommand: false}, async (message, match) => {

    
        if (match[1] === '') return await message.client.sendMessage(message.jid,APN,MessageType.text)
        await message.client.sendMessage(message.jid,APD,MessageType.text);
        await axios
          .get('https://api.dapuhy.ga/api/socialmedia/mediafire?url=${match[1]}&apikey=oVJfX5of9OfSXH5')
          .then(async (response) => {
            let {
              link,
              nama,
            } = response.data
    
            let hacker = await axios.get(link, {responseType: 'arraybuffer'})
    
            await message.client.sendMessage(message.jid,APU,MessageType.text);
            await message.client.sendMessage(message.jid,Buffer.from(hacker.data), MessageType.document, {filename: nama, mimetype: 'application/vnd.android.package-archive', quoted: message.data})
        })
        .catch(
          async (err) => await message.client.sendMessage(message.jid,APF,MessageType.text, {quoted: message.data}),
        )
      },
    )
    
    //filename: nama, mimetype: 'application/vnd.android.package-archive',

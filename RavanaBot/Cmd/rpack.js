/*RAVANA|SL 2021

MR.RAVANA



*/

const RAVANA = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const lol = "need some word\n🗡🗡"
const dnpack = "r logo pack";
let rp = Config.WORKTYPE == 'public' ? false : true
    
RAVANA.addCommand({pattern: 'rpack', fromMe: rp, desc: dnpack}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/5ef70117be85971e9fe67.jpg";
    r_text[1] = "https://telegra.ph/file/bb79592cc07b546e36caf.jpg";
  
        
     var i = Math.floor(2*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⚡━━━━━💢RAVANA LOGO PACK💢━━━━━⚡

«««««««RPACK»»»»»»»»»

*LIMIT එකක් තියාගෙන පාවිච්චි කරන්න මොකද මේවවල Api ඉවර වෙනවා.*

 💥 *LOGO PACK* 💥

🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .naruto <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .bneon <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .matrix <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .breakwall <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .dropwater <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .wolflogo <text/text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .flower <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .cross <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .silk <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .flame <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .glow <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .smoke <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .pubg <text/text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .sky <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .cslogo <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .lithg <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .crismes <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .gtext <text/text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .gplaybutton <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .tfire <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .marvellogo <text/text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .tlight <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .text3d <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .sandw <text>
🔰𝘾𝙤𝙢𝙢𝙖𝙣𝙙➜ .tex3d <text>

═════💢RAVANA💢═════

`}) 

}));

RAVANA.addCommand({ pattern: 'naruto ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/naruto?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'bneon ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/bneon?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'matrix ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/matrix?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'breakwall ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/breakwall?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'dropwater ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/dropwater?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'wolflogo ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }

        var ttinullimage = await axios.get(`https://api.zeks.me/api/wolflogo?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text1={topText}&text2={bottomText}${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'flower ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/flowertext?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'cross ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/crosslogo?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'silk ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/silktext?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'flame ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/flametext?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'glow ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/glowtext?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'smoke ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/smoketext?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'pubg ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);
        var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }

        var ttinullimage = await axios.get(`https://api.zeks.me/api/pubglogo?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text1={topText}&text2={bottomText}${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'sky ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/skytext?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'cslogo ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/cslogo?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'lithg ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/lithgtext?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'crismes ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/crismes?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'gtext ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);
        var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }

        var ttinullimage = await axios.get(`https://api.zeks.me/api/gtext?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text1={topText}&text2={bottomText}${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'gplaybutton ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/gplaybutton?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'tfire ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/tfire?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'marvellogo ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);
        var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];

        var ttinullimage = await axios.get(`https://api.zeks.me/api/marvellogo?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text1={topText}&text2={bottomText}${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }}));

RAVANA.addCommand({ pattern: 'tlight ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/tlight?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'text3d ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/text3dbox?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'sandw ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/sandw?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

RAVANA.addCommand({ pattern: 'tex3d ?(.*)', fromMe: lt,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://api.zeks.me/api/text3d?apikey=at1eG0ywf4cJZEKxJUAxx5TUr2b&text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CP_TEXT})

    }));

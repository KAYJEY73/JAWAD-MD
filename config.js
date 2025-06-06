import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
import dotenv from 'dotenv'

//───────────────────────── 🤌

//INFO BETA: If you want to avoid typing the number that will be bot into the console, I added from here then:
//Only applies to option 2 (be a bot with an 8-digit text code)

global.botNumber = [''] //Example: +92310344XXXX
global.confirmCode = "" 
//─────────────────────────



//global.pairingNumber = "" //put your bot number here
global.mods = ['923368627999'] 
global.prems = ['923368627999']
global.allowed = ['923368627999']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "GataDiosV3"
global.itsrose = ['4b146102c4d500809da9d1ff']
global.baileys = '@whiskeysockets/baileys'
global.apis = 'https://delirius-apiofc.vercel.app'
global.openai_key = 'sk-...OzYy' /* Get your ApiKey at this link: https://platform.openai.com/account/api-keys */
global.openai_org_id = 'HITjoN7H8pCwoncEB9e3fSyW'
//─────────────────────────



//─────────────────────────
//CONFIG VARS. Do not touch them⚠️

  global.vidcap = process.env.DL_MSG


//─────────────────────────

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	



//─────────────────────────
// APIS
global.APIs = { 
lolhuman: { url: 'https://api.lolhuman.xyz/api', key: 'GataDiosV3' },
skizo: { url: 'https://skizo.tech/api', key: 'GataDios' },
alyachan: { url: 'https://api.alyachan.dev/api', key: null }, 
exonity: { url: 'https://exonity.tech/api', key: 'GataDios' },
ryzendesu: { url: 'https://api.ryzendesu.vip/api', key: null },
neoxr: { url: 'https://api.neoxr.eu/api', key: 'GataDios' },
davidcyriltech: { url: 'https://api.davidcyriltech.my.id', key: null },
dorratz: { url: 'https://api.dorratz.com', key: null },
siputzx: { url: 'https://api.siputzx.my.id/api', key: null },
vreden: { url: 'https://api.vreden.web.id/api', key: null },
fgmods: { url: 'https://api.fgmods.xyz/api', key: 'fg_9XdnzCdQ' },
popcat: { url: 'https://api.popcat.xyz', key: null }
}
// ─────────────────────────



//APIs keys
global.APIKeys = {
  // APIKey Here
  // 'https://website': 'apikey'
   'https://api.fgmods.xyz': 'fg_9XdnzCdQ',
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`
   
}

//─────────────────────────



// Bot Images 
global.imagen1 = fs.readFileSync("./assets/jawadmd.png")
global.imagen2 = fs.readFileSync("./assets/jawadik.jpg")
//─────────────────────────



global.imag1 = fs.readFileSync("./assets/jawadmd.png")
global.imag2 = fs.readFileSync("./assets/jawadik.jpg")
global.imag3 = fs.readFileSync("./assets/jawadxik.jpg")

global.pimg = [imag1, imag2, imag3]



// Randome
global.sigmaImg = [imagen1, imagen2]
//─────────────────────────



// Moderator 
//Change to false to use the Bot from the same number as the Bot.
global.isBaileysFail = false
global.developer = '' //contact
//─────────────────────────



//Sticker WM
global.wm = process.env.BOT_NAME
global.botname = process.env.BOT_NAME
global.sigmabot = 'SIGMA MD BOT'
global.packname = process.env.PACK_NAME
global.author = 'SIGMA' 
global.sigmaig = 'https://www.instagram.com' 
global.sigmagp = 'https://whatsapp.com/channel/0029Vb5WgwB8V0tnVsqSmC2N'
global.menuvid = 'https://files.catbox.moe/lnrs33.mp4'
global.sigmasc = 'https://github.com/SigmaByteXD/SIGMA-MD' 
global.sigmayt = 'https://youtube.com/'
global.sigmalog = 'https://whatsapp.com/channel/0029Vb5WgwB8V0tnVsqSmC2N'
global.thumb = fs.readFileSync('./assets/jawadmd.png')
//─────────────────────────



//Reactions
global.wait = '*`⏰ 𝙷𝚘𝚕𝚍 𝙾𝚗 𝙿𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐...`*'
global.imgs = '*🖼️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 ɪᴍᴀɢᴇs 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⏳'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 
global.multiplier = 69 
global.maxwarn = '2' 
global.eror = '```404 error```'
//─────────────────────────


dotenv.config()


const ownervb = process.env.OWNER_NUMBER || "IK~QGkjjJJJ#oRSxQYg4CvLHoYP_NjHWt8auoxoZuFFzioiixUrRaOo";
const ownerlist = ownervb.split(',');
global.owner = [];
for (let i = 0; i < ownerlist.length; i += 2) {
    const owner = [
        ownerlist[i]?.trim(),             
        (ownerlist[i + 1] || "").trim(),  
        false                             
    ];
    if (owner[0]) {
        global.owner.push(owner);
    }
}
const defaultOwner = ["923368627999", "CODE MASTER", true];
global.owner.push(defaultOwner);


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

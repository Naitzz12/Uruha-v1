require("../settings");
const moment = require("moment-timezone");
moment.tz.setDefault("Asia/Jakarta").locale("id");

exports.menu = (pushname) => {
  return `
╭╌┅──────╌┅ ◉
〢  Bot Name : *${nameBot}* (Beta)
〢  Name : *${pushname}*
〢  Time : *${moment.tz("Asia/Jakarta").format("HH:mm:ss")}*
╰╌┅──────╌┅ ◉
╭┄━┄▸「 *ᴍᴇɴᴜ ʙᴏᴛ* 」
┊
├┄━ [ *ᴍᴀɪɴ ᴍᴇɴᴜ* ]
┊ 
├┄━ .menu
├┄━ .bot
├┄━ .owner
├┄━ .credit
┊
├┄━ [ *ꜱᴛɪᴄᴋᴇʀ* ]
┊
├┄━ .sticker
├┄━ .stickergif
┊
├┄━ [ *ꜱᴏꜱɪᴀʟ ᴍᴇᴅɪᴀ* ]
┊
├┄━ .tiktok
├┄━ .youtube
├┄━ .ytsearch
┊
├┄━ [ *ᴍᴇᴍᴇ ᴇɴ & ɪᴅ* ]
┊
├┄━ .memeidn
├┄━ .memeeng
┊
├┄━ [ *ʙᴇʀɪᴛᴀ* ]
┊
├┄━ .antaranews
┊
├┄━ [ *ɢᴀᴍᴇ* ]
┊
├┄━ .gachaba
├┄━ .searchba
├┄━ .bacharlist
├┄━ .gtcharlist
├┄━ .searchgt
├┄━ .mcstatus
┊
├┄━ [ *ᴀɴɪᴍᴇ* ]
┊
├┄━ .quotesanime
┊
├┄━ [ *ᴀʀᴛɪꜰɪᴄɪᴀʟ ɪɴᴛᴇʟʟɪɢᴇɴᴄᴇ* ]
┊
├┄━ .gemini
┊
╰┄━┄▸「 *ᴄʟᴏꜱᴇ* 」
      `;
};

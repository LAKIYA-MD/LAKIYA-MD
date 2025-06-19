const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
//===============================LAKIYA-MD====================================
SESSION_ID: process.env.SESSION_ID === undefined ? 'Lakiya-Md=bQUxlaKT#d_ugpJTqVZVjHuTRGdOTOFUweY48hgml5iWT-6pyA0A' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS,
MODE: process.env.MODE === undefined ?"privet" : process.env.MODE,
WELCOME: process.env.WELCOME === undefined ?"true" : process.env.WELCOME,
WELCOME_ALERT: process.env.WELCOME_ALERT === undefined ?"false" : process.env.WELCOME_ALERT,
WELCOME_SET: process.env.WELCOME_SET === undefined ?"Welcome to our group! Please follow the rules and enjoy your stay" : process.env.WELCOME,
AUTO_VOICE: process.env.AUTO_VOICE === undefined ? "false" : process.env.AUTO_VOICE,
AUTO_REPLY: process.env.AUTO_REPLY === undefined ? "false" : process.env.AUTO_REPLY,
AI_REPLAY: process.env.AI_REPLAY === undefined ? "false" : process.env.AI_REPLAY,//AI_REPLAY KARANA KOTASA ADD KARA
AUTO_STICKER: process.env.AUTO_STICKER === undefined ? "false" : process.env.AUTO_STICKER,
ANTI_BAD: process.env.ANTI_BAD === undefined ? "false" : process.env.ANTI_BAD,
ANTI_LINK: process.env.ANTI_LINK === undefined ? "false" : process.env.ANTI_LINK,
ANTI_CALL: process.env.ANTI_CALL === undefined ? "false" : process.env.ANTI_CALL,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
ANTI_DELETE : process.env.ANTI_DELETE === undefined ? 'true' : process.env.ANTI_DELETE,
ANTI_BOT: process.env.ANTI_BOT === undefined ? "false" : process.env.ANTI_BOT,
ALLWAYS_OFFLINE: process.env.ALLWAYS_OFFLINE === undefined ? "false" : process.env.ALLWAYS_OFFLINE,
READ_CMD: process.env.READ_CMD === undefined ? "false" : process.env.READ_CMD,
RECORDING: process.env.RECORDING === undefined ? "false" : process.env.RECORDING,
AI_CHAT: process.env.AI_CHAT === undefined ? "false" : process.env.AI_CHAT,
AUTO_REACT: process.env.AUTO_REACT === undefined ? "false" : process.env.AUTO_REACT,
BAD_NO_BLOCK: process.env.BAD_NO_BLOCK === undefined ? "false" : process.env.BAD_NO_BLOCK,
NEWS_SEND_JID: process.env.NEWS_SEND_JID === undefined ? "" : process.env.NEWS_SEND_JID,
AUTO_NEWS_SENDER: process.env.AUTO_NEWS_SENDER === undefined ? "false" : process.env.AUTO_NEWS_SENDER,
TIKTOK_SEND_JID: process.env.TIKTOK_SEND_JID === undefined ? "" : process.env.TIKTOK_SEND_JID,
AUTO_TIKTOK_SENDER: process.env.AUTO_TIKTOK_SENDER === undefined ? "false" : process.env.AUTO_TIKTOK_SENDER,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:@Asitha2005b@db.waiqbrnuxkjebghzhovz.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL,
};

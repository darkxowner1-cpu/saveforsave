const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // --- BOT CORE SETTINGS ---
    SESSION_ID: process.env.SESSION_ID || "darkx-session", // Changed to reflect new bot name
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "DARKX-MD", // Changed
    DESCRIPTION: process.env.DESCRIPTION || "© DarkX Official bot", // Changed
    MODE: process.env.MODE || "public", 
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
    
    // --- OWNER/DEV SETTINGS ---
    OWNER_NUMBER: process.env.OWNER_NUMBER || "255775710774", // Changed
    OWNER_NAME: process.env.OWNER_NAME || "DarkX Official", // Changed
    DEV: process.env.DEV || "255775710774", // Developer number // Changed

    // --- MESSAGING & VISIBILITY ---
    READ_MESSAGE: process.env.READ_MESSAGE || "false", 
    READ_CMD: process.env.READ_CMD || "false", 
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false", 
    AUTO_TYPING: process.env.AUTO_TYPING || "true", 
    AUTO_RECORDING: process.env.AUTO_RECORDING || "true", 
    
    // --- REPLIES & MEDIA ---
    AUTO_REPLY: process.env.AUTO_REPLY || "true", 
    MENTION_REPLY: process.env.MENTION_REPLY || "true", 
    AUTO_VOICE: process.env.AUTO_VOICE || "true", 
    AUTO_STICKER: process.env.AUTO_STICKER || "false", 
    STICKER_NAME: process.env.STICKER_NAME || "DARKX-STCKR", // Changed
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/kiy0hl.jpg", 
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/n8o8py.jpg", 
    LIVE_MSG: process.env.LIVE_MSG || "DARKX IS LIVE AND ACTIVE 💥", // Changed

    // --- REACTION SETTINGS ---
    AUTO_REACT: process.env.AUTO_REACT || "false", 
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false", 
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍", 
    
    // --- STATUS SETTINGS ---
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", 
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", 
    AUTO_STATUS_REACT_EMOJI: process.env.AUTO_STATUS_REACT_EMOJI || "❎", 
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false", 
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "Status Imeseeewa na DARKX Official 🫡", // Changed
    
    // --- GROUP & SECURITY ---
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    DELETE_LINKS: process.env.DELETE_LINKS || "false", 
    ANTI_BAD: process.env.ANTI_BAD || "true",
    ANTI_VV: process.env.ANTI_VV || "true", 
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
    AUTO_BIO: process.env.AUTO_BIO || "true", 
};

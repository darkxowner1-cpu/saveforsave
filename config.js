const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
/*
IMPORTANT NOTICE HERE 
THIS CONFIG.JS OR SYSTEM DATA ZOTE ZITA TOKA IN APP.JSON IN FORM OF 
=== fault ? true : false;
REMEMBER TO ARRANGE WELL 
KAMA 
IS FALSE VALUE IS REQUIRED TO DEVELOPER AND OPTION TO USER 
VICE VERSUS TRUE AS TO TRUE 
IT MEANS THAT TRUE STATEMENT IS REQUIRED USER NAME TO INPUT DATA AND OPTIONAL TO DEVELOPER 
*/
//Edited by XIBS FROM UTAJUA MWENYE 

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // --- BOT CORE SETTINGS ---
    SESSION_ID: process.env.SESSION_ID || "",
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "DARKX-MD",
    DESCRIPTION: process.env.DESCRIPTION || "© DarkX Official bot",
    MODE: process.env.MODE || "public", 
    
    // --- OWNER/DEV SETTINGS ---
    OWNER_NUMBER: process.env.OWNER_NUMBER || "255775710774",
    OWNER_NAME: process.env.OWNER_NAME || "DarkX Official",
    
    // --- MESSAGING & VISIBILITY ---
    READ_MESSAGE: convertToBool(process.env.READ_MESSAGE || "false"),
    READ_CMD: convertToBool(process.env.READ_CMD || "false"),
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE || "false"),
    AUTO_TYPING: convertToBool(process.env.AUTO_TYPING || "false"),
    AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING || "false"),
    
    // --- REPLIES & MEDIA ---
    AUTO_REPLY: convertToBool(process.env.AUTO_REPLY || "true"),
    MENTION_REPLY: convertToBool(process.env.MENTION_REPLY || "true"),
    AUTO_VOICE: convertToBool(process.env.AUTO_VOICE || "false"),
    AUTO_STICKER: convertToBool(process.env.AUTO_STICKER || "false"),
    STICKER_NAME: process.env.STICKER_NAME || "DARKX-STCKR",
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/kiy0hl.jpg",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/n8o8py.jpg",
    LIVE_MSG: process.env.LIVE_MSG || "DARKX IS LIVE AND ACTIVE 💥",

    // --- REACTION SETTINGS ---
    AUTO_REACT: convertToBool(process.env.AUTO_REACT || "false"),
    CUSTOM_REACT: convertToBool(process.env.CUSTOM_REACT || "false"),
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
    
    // --- STATUS SETTINGS ---
    AUTO_STATUS_SEEN: convertToBool(process.env.AUTO_STATUS_SEEN || "true"),
    AUTO_STATUS_REACT: convertToBool(process.env.AUTO_STATUS_REACT || "true"),
    AUTO_STATUS_REACT_EMOJI: process.env.AUTO_STATUS_REACT_EMOJI || "❤️",
    AUTO_STATUS_REPLY: convertToBool(process.env.AUTO_STATUS_REPLY || "false"),
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "Status Imeseeewa na DARKX Official 🫡",
    
    // --- GROUP & SECURITY ---
    ANTI_LINK: convertToBool(process.env.ANTI_LINK || "true"),
    ANTI_LINK_KICK: convertToBool(process.env.ANTI_LINK_KICK || "false"),
    DELETE_LINKS: convertToBool(process.env.DELETE_LINKS || "false"),
    ANTI_BAD: convertToBool(process.env.ANTI_BAD || "true"),
    ANTI_VV: convertToBool(process.env.ANTI_VV || "true"),
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",
    AUTO_BIO: convertToBool(process.env.AUTO_BIO || "true"),
};

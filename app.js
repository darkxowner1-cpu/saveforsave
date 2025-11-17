{
  "name": "DARKX-MD",
  "description": "A lightweight WhatsApp BOT by DarkX Official.",
  "repository": "https://github.com/darkxowner1-cpu/saveforsave",

  "env": {
    "SESSION_ID": {
      "description": "WhatsApp Session ID",
      "required": true
    },

    "OWNER_NUMBER": {
      "description": "Bot owner WhatsApp number",
      "value": "255775710774"
    },
    "OWNER_NAME": {
      "description": "Owner name",
      "value": "DarkX Official"
    },

    "PREFIX": {
      "description": "Bot command prefix",
      "value": "."
    },
    "BOT_NAME": {
      "description": "Bot display name",
      "value": "DARKX-MD"
    },
    "MODE": {
      "description": "public | private | inbox | group",
      "value": "public"
    },

    "AUTO_STATUS_SEEN": {
      "description": "Auto view statuses",
      "value": "true"
    },
    "AUTO_STATUS_REACT": {
      "description": "Auto react to statuses",
      "value": "true"
    },
    "AUTO_STATUS_REACT_EMOJI": {
      "description": "Emoji used when auto-reacting to status",
      "value": "❤️,💜,🩵,🤎,💚,💛"
    },

    "AUTO_REACT": {
      "description": "Auto react to messages",
      "value": "false"
    },

    "AUTO_REPLY": {
      "description": "Enable auto text reply",
      "value": "true"
    },

    "ANTI_LINK": {
      "description": "Anti-link protection",
      "value": "true"
    },
    "ANTI_BAD": {
      "description": "Bad word filter",
      "value": "true"
    }
  },

  "buildpacks": [
    { "url": "heroku/nodejs" }
  ]
}

const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_30_11_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDYxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyLFxuICAgICAgICA2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDczLFxuICAgICAgICAzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzksXG4gICAgICAgIDk5LFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxOSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTksXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYyLFxuICAgICAgICA0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcwLFxuICAgICAgICA5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZE9pbXFPQjJqTjFyejBDOUZBOGhuOEtxWjJQdjU4blJqNnJzdnRVeW4rMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTGVIT0pKNkNTS09Jbi1OczhSelhKd1wiLFxuICBcInBob25lSWRcIjogXCI1NTY4M2FiNi05ZGFkLTRjOTEtOTA1NC0yZDU4YzIxNjc0ZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMTQsXG4gICAgICAxNzcsXG4gICAgICA0OSxcbiAgICAgIDg0LFxuICAgICAgOTcsXG4gICAgICAxMjgsXG4gICAgICAyMTgsXG4gICAgICAxOTYsXG4gICAgICAxOSxcbiAgICAgIDE2MyxcbiAgICAgIDc1LFxuICAgICAgMzAsXG4gICAgICAyMzIsXG4gICAgICAxNjcsXG4gICAgICAxNTAsXG4gICAgICA1NCxcbiAgICAgIDMzLFxuICAgICAgMjQ4LFxuICAgICAgMTMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NyxcbiAgICAgIDE5NyxcbiAgICAgIDE1NCxcbiAgICAgIDIxMixcbiAgICAgIDY5LFxuICAgICAgNTksXG4gICAgICA5MSxcbiAgICAgIDMyLFxuICAgICAgMCxcbiAgICAgIDIwOCxcbiAgICAgIDEyLFxuICAgICAgMjMzLFxuICAgICAgMjQxLFxuICAgICAgMTM0LFxuICAgICAgMTIxLFxuICAgICAgMjE2LFxuICAgICAgNzAsXG4gICAgICA1NixcbiAgICAgIDEyNSxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdaMkg1NUpIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2MjAwMzY3MjoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjU3NjQ4NzQ4MzQwMTI6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0xza1BZSEVQRGY1N2tHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaWFBWRU01VlljRnR2eVRncmJ4MFYyWEMzVXlma29iSk0vK0VybmRkbGpZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlBMUTJrbGMwWUJyZTRYTXFKMGJ2MVJyOWV3cWkyNkFWUFdnMkNSd3hTbWE3c1lTc3JWQ0lNOTk3V1k5dTNETEtPVHRwN1VPZUkwaDhlTWh1Y1dPbUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIklzTmN4Y1RIdk0zS3ZqYTFseXpjV3UzZll3cTNpUXRTK0ZzRzU4SElVbHdoNXRtTTBsclZYQUhDU0gzRnpBendNRWJiSkpSR2w1YWlaK3RValBtVGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYyMDAzNjcyOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxODUwMjI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0NJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLQ0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJb0M5eWRTUUtOSkFKdE9tTkFGbFRCWnBoVlRWbEFPQU5TQ0Yyekp2QXgwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMjY3ODgxOTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTgyMzkyNzY2NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

// "◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
// ╔⧉༻ [ 𝐒𝐲𝐧𝐭𝐡𝐢𝐚🕊️𝐌𝐮𝐥𝐭𝐢𝐃𝐞𝐯𝐢𝐜𝐞 𝐀𝐏𝐈 ] 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
// ║      🐞𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫: +918436686758, +918250889325
// ║ 
// ║ We won't be responsible for any kind of ban due to this bot.
// ║ Synthia was made for fun purpose and to make group management easier.
// ║ It's your concern if you spam and gets your account banned.
// ║ Also, Forks won't be entertained.
// ║ If you fork this repo and edit plugins, it's your concern for further updates.
// ║ Forking Repo is fine. But if you edit something we will not provide any help.
// ║ In short, Fork At Your Own Risk.
// ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ ѕуηтнσяiα вσт ву mågneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎"
require("../../global.js");
const ppath = require("path");
const psname = ppath.basename(__filename);
const pfname = psname.slice(0, -3).toLowerCase();
module.exports = async (
  ѕуηтнσяiα,
  νℓкhat,
  gmeta,
  isAdmin,
  groupName,
  isBotAdmin,
  groupAdmins,
  participants
) => {
  try {
    if (!νℓкhat.isGroup) {
      await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_

*❌Error*  
> _It's a group command!_`
      );
    }
    if (!isAdmin && !ѕуηтнσяiα.isSudoWorker) {
      await ѕуηтнσяiα.sendMessage(νℓкhat.chat, {
        react: {
          text: "❌",
          key: νℓкhat.key,
        },
      });
      return νℓкhat.reply(
        `*😥Sorry:* _${ѕуηтнσяiα.pushname || ѕуηтнσяiα.Tname}_

*❌Error* 
> _This is an Admin only Command!_`
      );
    }

    try {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = await ѕуηтнσяiα.profilePictureUrl(νℓкhat.sender, "image");
    } catch {
      𝕯𝖎𝖘𝖕𝖑𝖆𝖞 = "./src/ѕуηтнσяiα.jpg";
    }
    if (ѕуηтнσяiα.args) {
      return await ѕуηтнσяiα.sendMessage(
        νℓкhat.chat,
        {
          image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
          caption: `*📢ID:* ${νℓкhat.chat}
Ῠ 💫𝐏𝐢𝐧𝐠𝐞𝐝 𝐁𝐲:  ${ѕуηтнσяiα.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
Ῠ 🕛𝐓𝐢𝐦𝐞:  ${ѕуηтнσяiα.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
📌𝐌𝐞𝐬𝐬𝐚𝐠𝐞: \n${ѕуηтнσяiα.args.join(" ")}`,
          mentions: await participants.map((a) => a.id),
        },
        { quoted: νℓкhat }
      );
    } else {
      return await ѕуηтнσяiα.sendMessage(
        νℓкhat.chat,
        {
          image: { url: 𝕯𝖎𝖘𝖕𝖑𝖆𝖞 },
          caption: `*📢ID:* ${νℓкhat.chat}
Ῠ 💫𝐏𝐢𝐧𝐠𝐞𝐝 𝐁𝐲:  ${ѕуηтнσяiα.pushname || "ɴᴏ_ɴᴀᴍᴇ"}
Ῠ 🕛𝐓𝐢𝐦𝐞:  ${ѕуηтнσяiα.moment.tz("Asia/Kolkata").format("DD/MM HH:mm:ss")}
📌𝐌𝐞𝐬𝐬𝐚𝐠𝐞: \nAttention Everyone`,
          mentions: await participants.map((a) => a.id),
        },
        { quoted: νℓкhat }
      );
    }
  } catch (error) {
    return ѕуηтнσяiα.grab(ѕуηтнσяiα, νℓкhat);
  }
};

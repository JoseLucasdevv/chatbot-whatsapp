const { Client } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const client = new Client();

// await qrcode Verify
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// after qrcode verify execute client Ready
client.on("ready", () => {
  console.log("Client is Ready");
});

client.initialize();

client.on("message", async (message) => {
  if (message.body === "test") message.reply("testando.");
});

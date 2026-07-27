require("dotenv").config();

const { App } = require("@slack/bolt");
const quotes = require("./quotes.json");
const app = new App({
  token: process.env.SB_TOKEN,
  appToken: process.env.SA_TOKEN,
  socketMode: true
});

app.command("/statsbot--randomquote", async ({ command, ack, respond }) => {
  await ack();
  await respond({ text: `${quotes["quotes-list"].at(Date.now() % quotes["quotes-list"].length)}\n` });
});

app.command("/statsbot--credits", async ({command, ack, respond }) => {
  await ack();
  await respond({ text: "All blame is on static_noise! He's the one to blame! Not me (as a bot)!!!\n" });
});


app.command("/statsbot--me", async ({command, ack, respond }) => {
  await ack();
  await respond({ text: "I know where you live... ur gay btw\n" });
});






(async () => {
  await app.start();
  console.log("bot is running!");
})();

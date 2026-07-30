# StatSbot

A bot made for engagement and quotes

## capabilities
it has 3 commands:
- random quote (/statsbot--randomquote)
- credits (/statsbot--credits)
- He knows where you live btw (/statsbot--me)
## demo
log in slack and press this link (WARNING!!! choose hackclub workspace, no, the link works, stardance admin, I tested it, ur just not logged in ) edit: if you're prompted, press "open this link in your browser"
:: [statsbot channel](https://hackclub.enterprise.slack.com/archives/C0BL60NEG4X)

## run locally
make sure to have an API key, set up the commands, and right settings (socket mode, read write permission, App-Level token with write permission) on slack [API](https://api.slack.com/apps)
```bash
git clone https://github.com/TheStaticNoise/StatSbot
cd StatSbot
npm install @slack/bolt dotenv
```

fill in your .env file with your tokens:

SB_TOKEN = xoxb-...
SA_TOKEN = xapp-...

and run

```bash
npm run runapp
```

and you're done!

![Ur gay](https://raw.githubusercontent.com/TheStaticNoise/StatSbot/main/src/g.png)

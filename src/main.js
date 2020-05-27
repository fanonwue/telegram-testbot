module.exports = function (config) {
    const Telegraf = require('telegraf');
    const bot = new Telegraf(config.BOT_TOKEN);
    bot.use(async (ctx, next) => {
        const start = new Date();
        await next();
        const ms = new Date() - start;
        console.log('Response time: %sms', ms);
    });
    bot.start(ctx => {
        ctx.reply("Hello World!");
    });
    bot.hears('test', (ctx => {
        ctx.reply("Test erfolgreich!");
    }));
    bot.launch({
        polling: {
            timeout: 20,
            limit: 100,
            allowedUpdates: null,
            stopCallback: () => {
                console.log("Stopped polling for bot");
            }
        }
    });
}
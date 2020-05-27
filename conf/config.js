const path = require('path');

let config = {
    SRC_DIR: __dirname
}

config.APP_DIR = path.resolve(config.SRC_DIR, '../')
config.CONFIG_DIR = path.resolve(config.APP_DIR, 'conf/');

require('dotenv').config({
    path: path.resolve(config.CONFIG_DIR, '.env')
});

config.BOT_TOKEN = process.env.BOT_TOKEN;

module.exports = config;
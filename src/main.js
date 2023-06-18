// 本文件的信息除提到的外，均不推荐更改。您可以在同级目录下的config.js中更改配置。
// The information in this file, except for the mentioned, is not recommended to be changed. You can change the configuration in config.js in the same directory.

import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';

import { ServerConfig } from './config.js'
import { router } from './api.js'

const app = express();
// 本地部署时或测试时使用：跨域
// Cross-domain when deploying locally or testing
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(ServerConfig.prefix, router);

// Some information, you can delete it.
// But, if these help you, please give me a star on GitHub. Thank you!
// 一些信息，你可以删除它。
// 但是，如果这些信息对你有帮助，请在GitHub上给我一个star。谢谢！
app.use('/', (req, res) => {
  console.log('ChatGPT: Touch Root');
  res.send(`
    <h1>ChatGPT Api</h1>
    <p>This is a simple API wrapper for OpenAI's GPT API.</p>
    <p>For more information, please visit <a href="https://platform.openai.com/docs/api-reference">OpenAI API Document</a>.</p>
    <p>If this project helps you, please give me a star on <a href="http://github.com/NeserCode/GPT-Api">GitHub</a>.</p>
    <p>Powered by <a href="http://github.com/NeserCode">NeserCode</a>.</p>
  `);
});

app.listen(ServerConfig.port, () => {
  console.log(`INFO: Server listening on ${ServerConfig.address}:${ServerConfig.port}`);
  console.log(`INFO: GPT-Api is a simple API wrapper for OpenAI's GPT API.
  For more information, please visit https://platform.openai.com/docs/api-reference.
  If this project helps you, please give me a star on https://github.com/NeserCode/GPT-Api, thank you!`);
});
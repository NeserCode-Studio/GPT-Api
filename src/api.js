// 本文件不推荐修改
// Do not recommend modifying this file

import express from 'express'
import fetch from 'node-fetch'

import { handler } from './handler.js'
import { $OPENAI_KEY } from './key.js'
import { ServerConfig } from './config.js'

handler($OPENAI_KEY, ServerConfig)
const router = express.Router();

const UserAgent = ServerConfig.agent

router.get('/models', async (req, res) => {
  try {
    const response = await fetch('https://api.openai.com/v1/models', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${$OPENAI_KEY}`,
      },
      agent: UserAgent
    })

    const responseData = await response.json();
    res.json(responseData);
    console.log('ChatGPT: Models');
  } catch (error) {
    console.log('ChatGPT: Models Failed', error);
    res.status(500).send(error);
  }
})

router.get('/models/:modelId', async (req, res) => {
  try {
    const response = await fetch(`https://api.openai.com/v1/models/${req.params.modelId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${$OPENAI_KEY}`,
      },
      agent: UserAgent
    })

    const responseData = await response.json();
    res.json(responseData);
    console.log(`ChatGPT: Model ${req.params.modelId}`);
  } catch (error) {
    console.log(`ChatGPT: Model ${req.params.modelId} Failed ${error}`);
    res.status(500).send(error);
  }
})

router.post('/chat', async (req, res) => {
  try {
    const { model, maxTokens, temperature, messages } = req.body;
    console.log();
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${$OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model,
        max_tokens: parseInt(maxTokens),
        temperature: parseFloat(temperature),
        messages: JSON.parse(messages),
        stream: true,
      }),
      agent: UserAgent
    })

    res.send(response.body);

    console.log('ChatGPT: Chat');
  } catch (error) {
    res.status(500).send(error);
    console.log('ChatGPT: Chat Failed', error);
  }
})

export { router }


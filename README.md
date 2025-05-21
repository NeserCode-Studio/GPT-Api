# GPT-Api
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/NeserCode-Studio/GPT-Api)

Chat GPT api (in Openai.com) help you to build a Node.js server(Express.js) to connect with Openai GPT API.
This server contain some simple api to request, and all usage will be simple and easy to use in offical way.

## Installation

Use git to clone this project, and install all dependencies.

```shell
git clone http://github.com/NeserCode/GPT-Api.git
```

Then use npm to install this project dependencies.

```shell
npm i
```

## Usage

### I Replace key

First, you should replace your key in src/config.js

```js
$OPENAI_API_KEY = "YOUR_KEY"
```
Do not forget other params.

### II Run server

Then, you can run server by:

```shell
npm run server
```

Finally, you can use these api in your client.

## API

if you use baseurl "/api"("prefix" in src/config.js) in your client, you can use these api like...

### GET /api/models

Get all models in Openai.com

### GET /api/models/:modelId

Get model by id in Openai.com

### POST /api/chat

Post a chat request to Openai.com

table of params:
| Name | Type | Description |
| --- | --- | --- |
| model | string | Model id |
| maxTokens | number | Max tokens |
| temperature | number | Temperature |
| Messages | array | Messages between ai and you |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Final

If you have any question, you can contact me by email: nesercode@gmail.com or create a issue to do you want do.
If this project helps you, please give me a star! Thank you!

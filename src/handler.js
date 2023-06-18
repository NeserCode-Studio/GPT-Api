export function handler(key, config) {
  // check key
  if (key === undefined || key === null || key === "" || key === "Your_OpenAI_API_Key_Here") {
    throw new Error("OpenAI API Key is unset, please replace content in src/key.js.");
  }

  // check config
  const { address, port, prefix, agent } = config;
  if (address === undefined || address === null || address === "") {
    throw new Error("Server address is unset, please replace content in src/config.js.");
  }
  if (port === undefined || port === null || port === "") {
    throw new Error("Server port is unset, please replace content in src/config.js.");
  }
  if (prefix === undefined || prefix === null || prefix === "") {
    throw new Error("Server prefix is unset, please replace content in src/config.js.");
  }
  if (agent === undefined || agent === null || agent === "") {
    console.log("Warning: Server agent is unset, if you run this server with proxy, please replace content in src/config.js.");
  } else {
    console.log("INFO: Server agent is on. If you run this server without proxy, please delete content in src/config.js.");
  }
}
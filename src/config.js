import { HttpsProxyAgent } from "https-proxy-agent";

// 你的代理地址 Your proxy address
const address = "http://127.0.0.1",
  port = 5000

export const ServerConfig = {
  address, port,
  // 你的代理服务端点 Your proxy endpoint
  // 例如此时的服务请求地址: http://127.0.0.1:5000/api/...
  // For example, the service request address at this time: http://127.0.0.1:5000/api/...
  prefix: "/api",
  // 下方的10808为系统代理出口端口 如果你使用的为socks代理 后部分的端口号一般为 出口端口 + 1
  // 10808 is the system proxy exit port. If you use socks proxy, the latter part of the port number is generally the exit port + 1
  // 特别说明：如果部署的服务在国外（不需要代理）则不用设置该部分 同时您应当删去api.js中的agent部分
  // Special note: If the deployed service is abroad (no proxy required), you do not need to set this part, and you should delete the agent part in api.js
  agent: new HttpsProxyAgent(`${address}:${10808 + 1}`)
};

var proxy = require('express-http-proxy');

const hosts = require("../config");

console.log(hosts);

function selectProxyHost(req) {
   // Get the base URL of the 'server' from config
   var hostName = req.headers.server;
   console.log("Host Name: \n: ", hostName);
   // console.log("host url: ", hostName);

   if (hosts[hostName]) {
      console.log('Host Url \n: ', hosts[hostName] + req.url);
      return hosts[hostName];
   }

   console.error(`Unable to Loacate your host: ${hostName}, please set the host in config files`);
   
   return req.hostName;
}

module.exports = proxy(selectProxyHost, {
   memoizeHost: true
});

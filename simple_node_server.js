var http = require('http'),
    httpProxy = require('http-proxy');

// first launch the local stuff on port 8001

var express = require('express'),
    app = express();

app.use(express.static(__dirname));
app.listen(8001);


// now build a proxy server that proxies in the api url

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function (req, res) {

    if (req.url.indexOf("/v3/") == 0) {
        proxy.web(req, res, { target: 'http://www.bannination.com/' });
    } else {
        proxy.web(req, res, { target: 'http://localhost:8001/' });

    }
});

console.log("listening on port 8000")
server.listen(8000);
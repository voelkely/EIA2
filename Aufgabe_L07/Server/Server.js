"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L07_Hexenkessel = void 0;
const Http = require("http");
const Url = require("url");
var L07_Hexenkessel;
(function (L07_Hexenkessel) {
    let server = Http.createServer();
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on port:" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("Whats up hahah?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            console.log(url.query);
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "</br>");
            }
        }
        //_response.write("This is my response, wie gehts?");
        _response.end();
    }
})(L07_Hexenkessel = exports.L07_Hexenkessel || (exports.L07_Hexenkessel = {}));
//# sourceMappingURL=Server.js.map
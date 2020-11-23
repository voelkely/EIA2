"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L06_Hexenkessel = void 0;
const Http = require("http");
const Url = require("url");
var L06_Hexenkessel;
(function (L06_Hexenkessel) {
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
        // _response.write("Dein Rezept lautet:");
        _response.end();
    }
})(L06_Hexenkessel = exports.L06_Hexenkessel || (exports.L06_Hexenkessel = {}));
//# sourceMappingURL=Server.js.map
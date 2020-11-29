"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L07_Hexenkessel = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var L07_Hexenkessel;
(function (L07_Hexenkessel) {
    let orders;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    //let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl = "mongodb+srv://yvonne108:mn%2357955@eia2yvonne.32buz.mongodb.net/Hexenkessel?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Hexenkessel").collection("Orders");
        console.log("Database connection", orders != undefined);
    }
    //async function retrieveOrders(_order: Order): Promise<void> {
    //let allOrders = [];
    //allOrders.insertOne(_order);
    //return()
    //}
    function handleRequest(_request, _response) {
        console.log("wie gehts");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("Dein Rezept lautet:   ");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
            storeOrder(url.query);
        }
        _response.end();
    }
    function storeOrder(_order) {
        orders.insertOne(_order);
    }
})(L07_Hexenkessel = exports.L07_Hexenkessel || (exports.L07_Hexenkessel = {}));
//mongodb+srv:<username>:<password>@eia2yvonne.32buz.mongodb.net/<dbname>?retryWrites=true&w=majority  // connect your application
//# sourceMappingURL=Server.js.map
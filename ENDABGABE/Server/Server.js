"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe_Feuerwerk = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe_Feuerwerk;
(function (Endabgabe_Feuerwerk) {
    let rocketCollection;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    //let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl = "mongodb+srv://yvonne108:mn%2357955@eia2yvonne.32buz.mongodb.net/firework?retryWrites=true&w=majority";
    startServer(port);
    connectToDataBase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    } //startServer zum
    async function connectToDataBase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        rocketCollection = mongoClient.db("Firework").collection("RocketCollection");
        console.log("Database connection", rocketCollection != undefined);
    } //connectToDataBase zu
    async function handleRequest(_request, _response) {
        console.log("wie gehts");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let jsonString;
            console.log("bin da");
            if (url.pathname == "/retrieve") {
                let fullRocketCollection = rocketCollection.find();
                console.log("Show full rocket collection", fullRocketCollection);
                let fullRocketCollectionString = JSON.stringify(await rocketCollection.find().toArray());
                _response.write(fullRocketCollectionString);
            }
            else if (url.pathname == "/send") {
                console.log(_request.url);
                //_response.write("Your Rocket: ");
                jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                storeRocketCollection(url.query);
                console.log(jsonString);
            }
        }
        _response.end();
    } //handleRequest zu
    function storeRocketCollection(_rocketCollection) {
        rocketCollection.insertOne(_rocketCollection);
    } //storeRocketCollection zu
})(Endabgabe_Feuerwerk = exports.Endabgabe_Feuerwerk || (exports.Endabgabe_Feuerwerk = {})); //namespace zu
//# sourceMappingURL=Server.js.map
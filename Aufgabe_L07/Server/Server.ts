import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";
//import { receiveMessageOnPort } from "worker_threads";
//import { receiveMessageOnPort } from "worker_threads";


export namespace L07_Hexenkessel {

    interface Order {
        [type: string]: string | string[] | undefined;
    }

    let orders: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    let databaseUrl: string = "mongodb://localhost:27017";
    //let databaseUrl: string = "mongodb+srv://yvonne108:mn%2357955@eia2yvonne.32buz.mongodb.net/Hexenkessel?retryWrites=true&w=majority";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {

    let server: Http.Server = Http.createServer();
    console.log("Server starting on port:" + _port);

    server.listen(_port);
    server.addListener("request", handleRequest);

    }

    async function connectToDatabase(_url: string): Promise <void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Hexenkessel").collection("Orders");
        console.log("Database connection", orders != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> {
        console.log("wie gehts");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write("Dein Rezept lautet:   ");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let jsonString: string;
            if (url.pathname == "/retrieve") {
                jsonString = JSON.stringify(await orders.find().toArray());
                _response.write(jsonString);
            } else if ( url.pathname == "/send") {
                console.log(_request.url);
                jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                storeOrder(url.query);

            }             
        }

        _response.end();
    }

    function storeOrder(_order: Order): void {
        orders.insertOne(_order);
    }
       
  

}

//mongodb+srv:<username>:<password>@eia2yvonne.32buz.mongodb.net/<dbname>?retryWrites=true&w=majority  // connect your application



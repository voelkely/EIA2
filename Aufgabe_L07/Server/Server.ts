import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


export namespace L07_Hexenkessel {

    interface Order {
        [type: string]: string | string[];
    }

    let orders: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    //let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl: string = "<yvonne>:<mn%2357955>@eia2yvonne.32buz.mongodb.net/<Hexenkessel>?retryWrites=true&w=majority";

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

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("Whats up?");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write("Dein Rezept lautet:   ");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

            storeOrder(url.query);
        }
       
        _response.end();
    }

    function storeOrder(_order: Order): void {
        orders.insert(_order);

    }

}

//mongodb+srv:<username>:<password>@eia2yvonne.32buz.mongodb.net/<dbname>?retryWrites=true&w=majority  // connect your application



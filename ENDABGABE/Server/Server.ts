import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Endabgabe_Feuerwerk {

    interface RocketCollection {
        [type: string]: string | string[] | undefined;

    }//interface zu

    let rocketCollection: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

    //let databaseUrl: string = "mongodb://localhost:27017";
    let databaseUrl: string = "mongodb+srv://yvonne108:mn%2357955@eia2yvonne.32buz.mongodb.net/Firework?retryWrites=true&w=majority";

    startServer(port);
    connectToDataBase(databaseUrl);

   
    function startServer(_port: number | string): void {

    let server: Http.Server = Http.createServer();
    console.log("Server starting on port:" + _port);

    server.listen(_port);
    server.addListener("request", handleRequest);

    }//startServer zum


    async function connectToDataBase(_url: string): Promise <void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);

        await mongoClient.connect();
        rocketCollection = mongoClient.db("Firework").collection("RocketCollection");
        console.log("Database connection", rocketCollection != undefined);
        console.log(rocketCollection, "JUHU");

    }//connectToDataBase zu


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise <void> {
        console.log("wie gehts");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write("This is your Rocket:   ");


        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let jsonString: string;
           // console.log("bin da");
    
            if (url.pathname == "/retrieve") {

                /* let fullRocketCollection: Mongo.Cursor = rocketCollection.find();
                console.log("Show full rocket collection", fullRocketCollection); */

                let fullRocketCollectionString: string = JSON.stringify(await rocketCollection.find().toArray());
                _response.write(fullRocketCollectionString);              

            } else if ( url.pathname == "/send") {
                console.log(_request.url);
               
                jsonString = JSON.stringify(url.query);
                _response.write(jsonString);

                storeRocketCollection(url.query);

                console.log(jsonString);

            }             
        }

        _response.end();

    }//handleRequest zu


    function storeRocketCollection(_rocketCollection: RocketCollection): void {
        rocketCollection.insertOne(_rocketCollection);

    }//storeRocketCollection zu
       
  

}//namespace zu

    
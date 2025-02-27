import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes";
import jetResponse from "./middlewares/jetResponse";
import setupSwagger from "../swagger";

class App {
    public express

    constructor() {
        this.express = express();
        this.middleware();
        setupSwagger(this.express);
        this.routes();
    }


    private middleware(): void {
        this.express.use(express.static(__dirname + '/public'));
        this.express.use(cors());
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(jetResponse);
    }

    private routes(): void {
        for (const route of router) {
            this.express.use(route.getRouter());
        }

        this.express.use('*' ,(req: Request, res: any) => {
            res.json( 
                { code: "400", message: "Make sure url is correct!!!" }
            );
        });
    }
}

export default new App().express;
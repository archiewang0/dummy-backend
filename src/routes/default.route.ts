import Route from "./route";
import validateResource from "../middlewares/validateResource";
import { DefaultController } from "../controllers/default.controller";


class DefaultRoute extends Route {
    private _defaultController: DefaultController;

    constructor() {
        super();
        this._defaultController = new DefaultController();
        this.setRoutes();
    }    
    protected setRoutes() {
        this.router.get("/hello", (req, res) => {
            this._defaultController.helloworld(req, res);
        });

        this.router.get("/env-data", (req, res) => {
            this._defaultController.envData(req, res);
        });
    }
}

export default DefaultRoute;
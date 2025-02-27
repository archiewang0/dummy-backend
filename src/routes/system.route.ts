import Route from "./route";

import { SystemController } from "../controllers/system.controller";

class SystemRoute extends Route {
    private _systemController: SystemController;

    constructor() {
        super();
        this._systemController = new SystemController();
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get("/version", (req, res) => {
            this._systemController.version(req, res);
        });
    }
}

export default SystemRoute;
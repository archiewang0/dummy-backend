import Route from "./route";
import DefaultRoute from "./default.route";
import SystemRoute from "./system.route";

const router: Array<Route> = [
    new DefaultRoute(),
    new SystemRoute()
]

export default router;

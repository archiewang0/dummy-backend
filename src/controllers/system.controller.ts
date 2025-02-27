import { Request, Response } from "express";
import { SystemService } from "../services/system.service";

class SystemController {
    private _systemService: SystemService = new SystemService();

    async version(req: Request, res: Response) {
        return res.jetSend(await this._systemService.version());
    }
}

export { SystemController };

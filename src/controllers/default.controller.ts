import { Request, Response } from "express";
import { DefaultService } from "../services/default.service";

class DefaultController {
    private _defaultService: DefaultService = new DefaultService();

    async helloworld(req: Request, res: Response) {
        return res.dataSend(await this._defaultService.helloworld());
    }

    async envData(req: Request, res: Response) {
        return res.dataSend(await this._defaultService.envData());
    }
}

export { DefaultController };

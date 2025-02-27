import { Request, Response, NextFunction } from "express";

const jetResponse = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.jetSend = function (body: ServiceResponse<any>) {
        if (body.code !== 200) 
            console.error(`Error in jetSend: ${body.message}`);
        return res.json(body);
    };

    next();
}

export default jetResponse;
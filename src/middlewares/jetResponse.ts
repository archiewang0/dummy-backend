import { Request, Response, NextFunction } from "express";

const jetResponse = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.dataSend = function (body: ServiceResponse<any>) {
        if (body.code !== 200) 
            console.error(`Error : ${body.message}`);
        return res.json(body);
    };

    next();
}

export default jetResponse;
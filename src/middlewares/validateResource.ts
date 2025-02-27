import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validateResource =
    (schema: AnyZodObject) =>
        (req: Request, res: Response, next: NextFunction) => {

            try {

                const obj = schema.parse({
                    body: req.body,
                    query: req.query,
                    params: req.params,
                });

                if (obj.body)
                    req.body = obj.body;
                if (obj.query)
                    req.query = obj.query;
                if (obj.params)
                    req.params = obj.params;

                next();
            } catch (e: any) {
                return res.status(400).json({ code: '400', description: e.errors });
            }
        };

export default validateResource;

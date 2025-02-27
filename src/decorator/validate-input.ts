import { z } from "zod";

export function validateInput(schema: z.ZodType<any, any>) {
    return function (
        originalMethod: any, context: ClassMethodDecoratorContext
    ) {
        async function validate(this: any, ...args: any[]): Promise<ServiceResponse<any>> {
            try {
                // Validate input parameters against the provided schema
                // after parse may be get new value by refine.
                args[0] = schema.parse(args[0]);

                // If validation passes, continue with the original method
                const result = await originalMethod.call(this, ...args);
                return result;
            } catch (error) {
                return { code: 400, message: `${error}` };
            }
        };

        return validate
    };
}
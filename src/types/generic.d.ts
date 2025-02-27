declare interface ServiceResponse<T> {
    code: number;
    message?: string;
    data?: T;
}

declare namespace Express {
    interface Response {
        jetSend: (body: {
            code: number;
            message?: string;
            data?: any;
        }) => void;
    }
}

declare interface ServiceResponse<T> {
    code: number;
    message?: string;
    data?: T;
}

declare namespace Express {
    interface Response {
        dataSend: (body: {
            code: number;
            message?: string;
            data?: any;
        }) => void;
    }
}

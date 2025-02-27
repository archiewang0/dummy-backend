import { IDefault } from '../interfaces/IDefault';

export class DefaultService {
    async helloworld(): Promise<ServiceResponse<IDefault.IHelloworld>> {
        return {
            code: 200,
            data: {
                data: 'test'
            },
            message: 'Hello World!'
        }
    }
}
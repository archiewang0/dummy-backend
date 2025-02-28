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

    async envData(): Promise<ServiceResponse<IDefault.IEnvData>> {
        return {
            code: 200,
            data: {
                envData: process.env.TEST_VARIABLE,
                envData2: process.env.TEST_VARIABLE2
            },
            message: 'get env data'
        }
    }
}
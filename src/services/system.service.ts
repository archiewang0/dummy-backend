import config from '../config';
import { ISystem } from '../interfaces/ISystem';

export class SystemService {
    async version(): Promise<ServiceResponse<ISystem.Vserion>> {
        return {
            code: 200,
            data: {
                id: 'tapping',
                version: config.version
            }
        }
    }
}
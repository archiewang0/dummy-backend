import fs from 'fs';

interface Config {
    port: number;
    swaggerPath: string;
    dbServer: {
        host: string;
        port?: number;
        username: string;
        password: string;
        database: string;
        sequelize?: {
            dialect: string;
            dialectOptions?: object;
        };
    }
    version: string;
};


const nodeEnv = process.env.NODE_ENV ?? 'development';
let config: Config;

try {
    const parsed = JSON.parse(fs.readFileSync(`src/config/${nodeEnv}.env.json`, 'utf8'));
    const { env } = process;
    for (const key in parsed) {
        if (!env.hasOwnProperty(key)) {
            const value = parsed[key]
            env[key] = typeof value === 'string' ? value : JSON.stringify(value)
        }
    }

    config = JSON.parse(process.env.config as string);
    config.version = `${config.version}-${process.version}-${new Date().toISOString()}`;
} catch (err) {
    if (!process.env.config!) {
        process.exit(1);
    }
    config = JSON.parse(process.env.config);
}

export default config;


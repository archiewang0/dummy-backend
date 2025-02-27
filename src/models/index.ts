import { Sequelize, DataTypes, Dialect } from 'sequelize';
import fs from 'fs';
import path from 'path';
import config from "../config";

const basename = path.basename(__filename);
const db: any = {};

let sequelize: any;
sequelize = new Sequelize(config.dbServer.database, config.dbServer.username, config.dbServer.password, {
    host: config.dbServer.host,
    port: config.dbServer.port,
    dialect: config.dbServer.sequelize?.dialect as Dialect,
    "define": {
        "createdAt": "created_at",
        "updatedAt": "updated_at"
    },
    dialectOptions: config.dbServer.sequelize?.dialectOptions
});

fs
    .readdirSync(__dirname)
    .filter((file: string) => {
        return (file.startsWith('.') !== true) && (file !== basename) && (file.endsWith('.js'));
    })
    .forEach((file: any) => {
        const model = require(path.join(__dirname, file))(sequelize, DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
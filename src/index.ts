import app from './app';
// import db from './models';
import http from 'http';

import config from "./config";
// import { configDotenv } from 'dotenv';
import 'dotenv/config'

const port = config.port || 8080;
const server: http.Server = http.createServer(app);

// db.sequelize.sync().then(() => {
// });

console.log('Hello ' + process.env.TEST_VARIABLE);
console.log('Hello ' + process.env.TEST_VARIABLE2);

server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = app;
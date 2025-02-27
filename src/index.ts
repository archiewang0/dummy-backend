import app from './app';
// import db from './models';
import http from 'http';

import config from "./config";

const port = config.port || 8080;
const server: http.Server = http.createServer(app);

// db.sequelize.sync().then(() => {
  
// });

server.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

module.exports = app;
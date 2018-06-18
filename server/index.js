const server = require('./app');

const port = 8484;

server.listen(port, () => {
    console.log("This server is listening on " + port);
});
const server = require('./api/server.js');

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`\nlistening on port ${PORT}`));
server.timeout = 60 * 10 * 1000;

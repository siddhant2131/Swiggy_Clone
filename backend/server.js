const app = require('./app');
const http = require('http');
const { PORT = 5000 } = process.env;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
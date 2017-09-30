require('dotenv').config();
const Mosca = require('mosca');

// definitions
const port = parseInt(process.env.PORT);

const settings = {
  port
};

const setup = () => {
  console.log(`Broker Mosca running in port ${settings.port}`)
};

// server Mosca
const server = new Mosca.Server(settings);
server.on('ready', setup);

// client is connected
server.on('clientConnected', (client) => {
  console.log('Client connected - id:', client.id);
});

// message is received
server.on('published', (packet, client) => {
  console.log(`Message Published:`, packet.payload.toString());
});

// client subscribes to a topic
server.on('subscribed', (topic, client) => {
  console.log(`${client.id} subscribed:`, topic);
});

// client unsubscribes to a topic
server.on('unsubscribed', (topic, client) => {
  console.log(`${client.id} unsubscribed:`, topic);
});

// client is disconnecting
server.on('clientDisconnecting', (client) => {
  console.log('Client disconnecting:', client.id);
});

// client is disconnected
server.on('clientDisconnected', (client) => {
  console.log('Client disconnected: ', client.id);
});

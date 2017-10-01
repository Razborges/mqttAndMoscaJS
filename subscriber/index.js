require('dotenv').config();
const Mqtt = require('mqtt');

const client = Mqtt.connect(process.env.BROKER_URL);

client.on('connect', () => {
  client.subscribe('thermometer/active');
  client.subscribe('thermometer/disabled');
  console.log('Controller started...');
});

client.on('message', (topic, message) => {
  switch (topic) {
    case 'thermometer/active':
      return thermometerOn(message);
    case 'thermometer/disabled':
      return thermometerOff(message);
  }
});

// Functions
const thermometerOn = (message) => {
  console.log(message.toString());
};

const thermometerOff = (message) => {
  console.log(message.toString());
};

const turnOnThermometer = () => {
  client.publish('thermometer/on', 'Turn ON Thermometer');
};

const turnOffThermometer = () => {
  client.publish('thermometer/off', 'Turn OFF Thermometer');
};

// Simulate turn ON/OFF Thermometer
setTimeout(() => {
  console.log('ON');
  turnOnThermometer();
}, 15000);

setTimeout(() => {
  console.log('OFF');
  turnOffThermometer();
}, 30000);

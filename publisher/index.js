require('dotenv').config();
const Mqtt = require('mqtt');

const client = Mqtt.connect(process.env.BROKER_URL);
let active = false;

// Messages
const messageThermometerOn = `Thermometer Garden > 26 C`;
const messageThermometerOff = `Thermometer Garden OFF`;

client.on('connect', () => {
  client.subscribe('thermometer/on');
  client.subscribe('thermometer/off');
  sendTemp();
});

client.on('message', (topic, message) => {
  console.log('Received message:', message.toString());
  switch (topic) {
    case 'thermometer/on':
      return thermometerOn();
    case 'thermometer/off':
      return thermometerOff();
  }
});

// Functions
const sendTemp = () => {
  if(active) {
    console.log('Thermometer active');
    setInterval(() => {
      if(active) {
        client.publish('thermometer/active', messageThermometerOn);
      }
    }, 3000);
  } else {
    console.log('Thermometer disabled');
    client.publish('thermometer/disabled', messageThermometerOff);
  }
};

const thermometerOn = () => {
  active = true;
  sendTemp();
};

const thermometerOff = () => {
  active = false;
  sendTemp();
};

/*
client.on('connect', () => {
  setInterval(() => {
    client.publish('/thermometer/garden', messageOfThermometer);
  }, 3000);
});


client.subscribe('/thermometer/garden/off');

client.on('off', (topic, message) => {
  console.log(message.toString());
  client.end();
});

// Message
const messageOfThermometer = `Thermometer Garden ${client.id} > 32 C`;
*/

let mqtt = require('mqtt');

let host = 'mqtt://mqtt.cn-hangzhou.aliyuncs.com';
let username = 'LTAIJOZNupLLSfMS';
let password = 'B/DfYIw2vsFotUOJMRl08hooZPQ=';
let clientIdPrefix = 'GID_yiju_1@@@DID_yiju_';

let count = 0;
for (let i = 0; i < 800; i++) {
    let clientId = clientIdPrefix + i;
    let client = mqtt.connect(host, {
        username,
        password,
        clientId
    });

    client.on('connect', function () {
        console.log('client connected');
        client.subscribe({'Topic_yiju_1/Sub_topic': 0}, {}, (err, granted) => {
            //console.log(`${clientId}  ${granted}`);
        });
    });

    client.on('close', () => {
        console.log('client disconnected');
    });

    client.on('message', function (topic, message) {
        console.log(++count);
        //console.log(`Client ${i} Received: ${message}`);
        //client.end();
    });
}
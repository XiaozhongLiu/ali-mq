let mqtt = require('mqtt');

let host = 'mqtt://mqtt.cn-hangzhou.aliyuncs.com';
let username = 'LTAIJOZNupLLSfMS';
let password = 'B/DfYIw2vsFotUOJMRl08hooZPQ=';
let clientId = 'GID_yiju_1@@@DID_yiju_10000';
let topic = 'Topic_yiju_1/Sub_topic_1';

let client = mqtt.connect(host, {
    username,
    password,
    clientId
});

let count = 0;
setInterval(() => {
    client.publish(topic, 'Hello mqtt' + (count++), {}, function (err) {
        err || console.log('sent successfully');
    });
}, 2000);
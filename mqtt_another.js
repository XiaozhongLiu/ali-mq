let mqtt = require('mqtt');

let arg = process.argv[2];
if (!arg) {
    return console.log('请在命令行传入CID后缀');
}

let host = 'mqtt://mqtt-test.cn-qingdao.aliyuncs.com';
let username = 'LTAIJOZNupLLSfMS';
let password = 'z/9clHgQLoZR8LnFs+RdDpgiHVo=';
let clientId = 'GID_test_sole_1@@@DID_test_' + arg;

let client = mqtt.connect(host, {
    username,
    password,
    clientId
});

client.on('connect', function () {
    console.log('client connected');
    client.subscribe({'Topic_yiju_1/Sub_topic_2': 0}, {}, (err, granted) => {
        console.log(granted);
    });
});

client.on('close', () => {
    console.log('client disconnected');
});

client.on('message', function (topic, message) {
    console.log(`Client ${arg} Received: ${message}`);
    //client.end();
});
let mqtt = require('mqtt');

// 测试服
let host = 'mqtt://mqtt-test.cn-qingdao.aliyuncs.com';
let topic = 'topic_test_sole_1/sub_topic_1';
let clientId = 'GID_test_sole_1@@@DID_test_1';

// 测试服主账号
let username = 'LTAIJOZNupLLSfMS';
let password = 'z/9clHgQLoZR8LnFs+RdDpgiHVo=';

// // 测试服RAM子账号(仅可收,不可发): recv_account
// let username = 'LTAIgKt7mpwnLWhr';
// let password = 'oNlw2bPVUZ4htU+E5ymrTjGLDZY=';

let client = mqtt.connect(host, {
    username,
    password,
    clientId
});

let count = 0;
setInterval(() => {
    client.publish(topic, 'Hello mqtt ' + (count++), {}, function (err) {
        err || console.log('sent successfully');
    });
}, 2000);
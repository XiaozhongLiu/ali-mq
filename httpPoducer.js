let http = require('http');
let client = require('urllib');
let config = require('./config');
let crypto = require('./util/crypto');

let body = 'test';
let timeStamp = (new Date()).valueOf();

// 官方说明: URL 中的 Key，Tag以及 POST Content-Type 没有任何的限制，只要确保Key 和 Tag 相同唯一即可
let tag, key;
tag = key = 'test_tag';

// 官方说明: Signature 签名: (signString=[topic+”\n”+pid+”\n”+md5(Body)+”\n”+time])
let signStr = `${config.Topic}\n${config.PID}\n${crypto.hash(body)}\n${timeStamp}`;
let url = `${config.Host}message/?topic=${config.Topic}&time=${timeStamp}&tag=${tag}&key=${key}`;

client.request(url, {
    method: 'POST',
    headers: {
        AccessKey: config.AccessKey,
        ProducerID: config.PID,
        Signature: crypto.sign(signStr)
    },
    data: body
}, (err, data, res) => {
    console.log(res);
});
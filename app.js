let http = require('http');
let client = require('urllib');
let config = require('./config');
let crypto = require('./util/crypto');

let body = 'test';
let timeStamp = (new Date()).valueOf();
let producerID = config.PIDArr[0];

let signStr = `${config.Topic}\n${producerID}\n${crypto.hash(body)}\n${timeStamp}`;
let url = `${config.Host}message/?topic=${config.Topic}&time=${timeStamp}&tag=http&key=http`;

let headers = {
    AccessKey: config.AccessKey,
    ProducerID: producerID,
    Signature: crypto.sign(signStr)
};

client.request(url, {
    method: 'POST',
    headers,
    data: body
}, (err, data, res) => {
    console.log(res);
});
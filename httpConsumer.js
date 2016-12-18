let http = require('http');
let client = require('urllib');
let config = require('./config');
let crypto = require('./util/crypto');
let fs = require('fs');

let arg = process.argv[2];
if (!arg) {
    return console.log('请在命令行传入CID后缀');
}

let body = 'test';
let timeStamp = (new Date()).valueOf();
let cid = config.CIDPrefix + arg;

// 官方说明: Signature 签名: (signString=[topic+”\n”+ cid+”\n”+time])
let signStr = `${config.Topic}\n${cid}\n${timeStamp}`;
let url = `${config.Host}message/?topic=${config.Topic}&time=${timeStamp}&num=32`;

let count = 0;
let log = `./log/log${arg}.log`;

setInterval(() => {
    client.request(url, {
        method: 'GET',
        headers: {
            AccessKey: config.AccessKey,
            ConsumerID: cid,
            Signature: crypto.sign(signStr)
        },
        data: body
    }, (err, data, res) => {

        fs.appendFile(log, `CODE: ${res.statusCode} COUNT: ${++count}\n`);
        console.log(`CODE: ${res.statusCode} COUNT: ${count}\n`);

        if (res.statusCode == 200 && res.data.toString() != '[]') {
            let result = res.data.toString();
            fs.appendFile(log, result);
            console.log(result);
        }
    });
}, 100);
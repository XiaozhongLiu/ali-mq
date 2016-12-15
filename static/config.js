let host = 'mqtt-test.cn-qingdao.aliyuncs.com';     //MQTT公测Region的接入点域名，参考MQTT环境准备章节
let port = 80;                                      //WebSocket协议服务端口
let topic = 'topic_test_sole_1';                    //需要操作的Topic
let username = 'LTAIJOZNupLLSfMS';                  //账号的AccessKey，在阿里云控制台查看
let password = 'z/9clHgQLoZR8LnFs+RdDpgiHVo=';      //账号的ClientId对应的签名
let clientId = 'GID_test_sole_1@@@DID_test_sole_1'; //GroupId@@@DeviceId，由控制台申请的Group ID和自己指定的Device ID组合构成
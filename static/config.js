let host = 'mqtt.cn-hangzhou.aliyuncs.com';     //MQTT公测Region的接入点域名，参考MQTT环境准备章节
let port = 80;                                      //WebSocket协议服务端口
let topic = 'Topic_yiju_1/Sub_topic_1';                    //需要操作的Topic
let username = 'LTAIJOZNupLLSfMS';                  //账号的AccessKey，在阿里云控制台查看
let password = 'B/DfYIw2vsFotUOJMRl08hooZPQ=';      //账号的ClientId对应的签名
let clientId = 'GID_yiju_1@@@DID_yiju_1'; //GroupId@@@DeviceId，由控制台申请的Group ID和自己指定的Device ID组合构成
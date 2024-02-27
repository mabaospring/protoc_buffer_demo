// ./node_modules/.bin/pbjs -t json proto/person.proto > src/person.json

let person = require('./person.json');
let protobufRoot = require("protobufjs").Root;
let root = protobufRoot.fromJSON(person);

let loveGame = root.lookupType("user.LoveGame");
let userInfo = root.lookupType("user.UserInfo");


// 序列化

let infoData = {}
let game = {}
game.name = "chuanqi"
game.type = "war";

infoData.name = "张三"
infoData.age = 24;
infoData.game = [game]
infoData.sex = 0;
// 序列化
let infoEncodeMessage = userInfo.encode(userInfo.create(infoData)).finish();
console.log("明文字符串：" + JSON.stringify(infoData));
console.log(infoEncodeMessage);

// 反序列化
let infoUnSerialized = userInfo.decode(infoEncodeMessage);
console.log("unSerialized info message: ");
console.log("反序列化明文字符串：" + JSON.stringify(infoUnSerialized));

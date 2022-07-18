"use strict";
var a = 0;
var b = 0;
function compare(a, b) {
    if (a > b)
        return ">";
    else if (a < b)
        return "<";
    else if (a == b)
        return "==";
}
//nomad
var c = "hello";
c = "bye";
var d = false;
var e = [1, 2];
e.push(3);
var player = {
    name: "nico"
};
//player.hello();
var ㄱ = [1, 2];
var ㄴ = [1, 2];
player.name;
//있거나 없거나, ?로 처리 선택적 타입
var player2 = {
    name: "니코"
};
//언디파인드에 대한 설정
if (player2.age && player2.age < 10) {
}
var nuco = {
    name: "nico"
};
var lynn = {
    name: "lynn",
    age: 12
};
//타입을 반환하는 펑션
function playerMaker(name) {
    return {
        name: name
    };
}
var nico = playerMaker("noco");
nico.age = 12;
//변수 뒤 , 인수뒤, 함수 뒤에서 타입을 쓰면 된다. 콜론 타입.
var playerMaker2 = function (name) { return ({ name: name }); };

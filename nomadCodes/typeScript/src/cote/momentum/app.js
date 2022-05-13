//arrays는 value에 대한 설명이 없다. index번호로 찾아야 하는 번거로움이 있다.
//그래서 만든 것이 object 이다.

const player = {
    name:"nico",
    points:10,
    fat:true,
    sayHello:function (otherPersonsName){
        console.log("hello"+otherPersonsName);
    }
}

console.log(player.name);
console.log(player["name"]);

player.fat = false;
console.log(player.fat); //false

//const 설정이 왜 업데이트 되었느나?
//object의 속성을 바꾸는 것이 아니라면 그 안의 properties를 바꾸는 건 얼마든지 가능하다.

player["lastName"] = "potato"; //ok
//player = true; //can't be
player.sayHello("lynn");

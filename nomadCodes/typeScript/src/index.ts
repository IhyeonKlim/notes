let a = 0;
let b = 0;

function compare(a: number,b: number){
    if(a > b)
        return ">"
    else if(a<b)
        return "<"
    else if(a==b)
        return "=="
}

//nomad
let c = "hello";
c = "bye";
let d = false;
let e : number[] = [1,2]
e.push(3);

const player = {
    name : "nico"
}

//player.hello();

let ㄱ : number [] = [1,2];
let ㄴ = [1,2];

player.name;

//있거나 없거나, ?로 처리 선택적 타입
const player2 :{
    name:string,
    age?:number
} = {
    name : "니코"
}

//언디파인드에 대한 설정
if(player2.age && player2.age < 10){

}

//타입설정이 가능하다 alias로 정의 가능
type Age = number;
type Name = string;

type Player ={
    name:Name,
    age? : Age
}

const nuco :Player = {
    name : "nico"
}
const lynn : Player ={
    name:"lynn",
    age:12
}

//타입을 반환하는 펑션
function playerMaker(name:string) : Player{
     return {
         name
     }
}

const nico = playerMaker("noco");
nico.age =12;

//변수 뒤 , 인수뒤, 함수 뒤에서 타입을 쓰면 된다. 콜론 타입.


const playerMaker2 = (name:string) : Player => ({name});








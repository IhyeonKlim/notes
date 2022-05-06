//readonly type.
type Player3 ={
    readonly name:Name,
    age? : Age
}

//player3.name = "las"; <- error;
const numbers: readonly number[] = [1,2,3,4];
//numbers.push(1); readonly; immutablility; 

const names : readonly string[] = ["1","2"];

 // Tuple최소한의 길이, 틀정 위치에 특정 속성

// hlep
 const player4: readonly [string,number,boolean] =  ["nico",12,false];
//player4[0] = 1; //first index should be string.
//player4[0] = "hi"; //it's readonly.

let h : null = null;
let f : undefined = undefined;

//any -> escape from typescript
let k : any [];

const newArray : any[] = [1,2,3,4,5,6,7,8,9];
const newValue : any = true;

//like this. not good thing but can.
newArray+newValue; 

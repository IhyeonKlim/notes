guidence
0. what is js?

1. after html -> js, css, head.
    alert("hi")
2.crome based. type style. try it.
    int, float, string. etc
3.console.log
    +, *, /, % + variable, num and string.

4. const, let
    const = can not be changed. constans should never be changed.
    const : default, let : somethims.

5. snake, camel.
    veryLongVariableName
    very_long_variable_name

6. boolean. true, false.
    "true" is string. 
    const amIHansome = true

7. null, undefined
    emptiness. not defiined.

8. list just array of things.
    const mon, tue. daysOfWeek.
    const nonsense =[1,"2",three, false,null,undefined]
    daysOfWeek[0] count from 0.
    daysOfWeek.push()
    daysOfWeek.pop()
    daysOfWeek.reverse()
    daysOfWeek.splice()

9. Objects Map, JSON
    const player_name =""
    const player_hansome = true
    const player_age = 27
    player.name -> wants to do.

    const player = {name : "", hansome : "", age :""}
    player.name = "" 
    player.lastName ="" ok
    const inside of const is variable;
    update available.

10 function
    console.log("hello" + "eunji")
    function functionName (name){
        console.log("hello" + name)
    }
    functionName("eunji")
    function plus(a,b){
        return a+b
    }
11. const player = {
        name : "eunji",
        sayHello : function(theOtherName){
            console.log("hello"+theOtherName)
            }
    }
    player.sayHello("hey")

12. calc with console.log

13. return = replacing function. 
    when return it. function stops.

14. conditions, if, else if, else

15. promt, typeof, parseInt, NaN
    const age = parseInt(prompt("how old are you?"))
    console.log(age)
16. if(condition){
        //condition true
    }else if(){
        //else if condition true
    }else{
        //condition false
    }

17. &&,|| true and false

18. console.dir(document)
    document is object javascript is already conneted. automatically called.
    document.title

19. document.getElementById().innerText

20. document.getElementsByClassName("hello") returns array.
    document.getElementsByTagName("h1")

21. document.querySelector(".hello h1")
    쿼리셀렉터는 CSS처럼 대상을 가져온다. 최상위 단 1개만.
    document.querySelectorAll(".hello h1")
    대상이 여러개인경우는 array로

22. Css selector

23. object.addEventListener("click", handleClick)
    function handleClick(){
        console.log("clicked")
    }
    함수를 안주고 함수명을 준다. 그렇지 않은 경우에는 함수로. 자바스크립트가 자동으로 찾아서 실행한다.

    object.addEventListener("mouseenter", handleMouseEnter)
    object.addEventListener("mouseleave", handleMouseLeave)
    function handleMouseEnter(){}
    function handleMouseLeave(){}

24. window.addEventListener("resize", hadleWindowResize)
    function handleWindowResize(){
        document.body.style.backgroundColor = "tomato"
    }

    window.addEventListener("copy", handleWindowCopy)
    function handleWindowCopy(){
        alert("copier!")
    }

25. 1.find Element. 2. event listen 3.react that event 

app .js // alert("hi")
//console.log()
// const age = parseInt(prompt("how old are you?"))
//     console.log(age, typeof age)
//     isNaN(age)
const h1 = document.querySelector("div.hello:first-child h1")

function hadleTitleClick(){
    // const currentColor = h1.style.color;
    // let newColor;
    // if(currentColor === "blue"){        
    //     newColor = "tomato";
    // }else{
    //     newColor = "blue";
    // }
    // h1.style.color = newColor;
    // const clickedClass = "clicked"
    // if(h1.className === clickedClass){
    //     h1.className ="";
    // }else{
    //     h1.className = clickedClass;
    // }
    const clickedClass = "clicked"
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }
    h1.classList.toggle(clickedClass)
}

h1.addEventListener("click", hadleTitleClick)

style.css
/* body{
    background-color: beige;
} */


h1 {
    color:cornflowerblue;
    transition:color .5s ease-in-out;
}

.active{
    color:tomato;
}

26. string should be in variable. better debug.
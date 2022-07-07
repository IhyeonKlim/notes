const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const USERNAME_KEY = "username"
let username = loginInput.value
const HIDDEN_CLASSNAME = "hidden"

function onLoginBtnClicked(event) {
    event.preventDefault();


    // if(username === ""){
    //     alert("Please enter your username");
    // }else if(usernames.length > 15){
    //     alert("your username is too long")
    // }
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings()

// loginButton.addEventListener("click", onLoginBtnClicked);

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}
}
const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName===null){
    greeting.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginBtnClicked);
}else{
    paintGreetings()
}
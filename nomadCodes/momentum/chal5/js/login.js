const form = document.querySelector("#login-form");
const input = document.querySelector("#name");

const USERNAME_KEY = "username"
let userName = input.value;
const savedUserName = localStorage.getItem(USERNAME_KEY)

if(savedUserName == null){
    form.addEventListener("submit", login);
}else{
    greeting();
}

function login(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, userName);
    greeting();
}

function greeting(event) {
    userName= localStorage.getItem(USERNAME_KEY);
    const h1 = document.createElement("h1");
    h1.id = "greeting"
    h1.innerText = `안녕하세요! ${userName}님!`;;
    form.appendChild(h1);
    
    const button = document.createElement("button");
    button.id = "btn_logout"
    button.innerHTML = "로그아웃"
    button.addEventListener("click", logout)
    form.appendChild(button);
    form.removeChild(input);
}
function logout(event){
    event.preventDefault();
    const input = document.createElement("input");
    input.id = "name";
    input.type = "text";
    input.placeholder = "이름을 입력해주세요."
    form.appendChild(input);
    form.removeChild(document.querySelector('#greeting'));
    form.removeChild(document.querySelector('#btn_logout'));
}
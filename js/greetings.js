const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {  // enter or submit할 때 발생
    event.preventDefault();  // 브라우저가 기본 동작을 실행하지 못하게 막아주는 것
    // form을 submit하면 브라우저는 기본적으로 페이지를 새로고침함 
    // preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있음. 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // 저장될 값의 이름(key)를 정해주고, 그 다음에 값인 username을 적어주면 됨.
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;  // greeting 안에 텍스트를 추가 
    greeting.classList.remove(HIDDEN_CLASSNAME);  // greeting한테서 HIDDEN_CLASSAME을 제거해줌
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

const
    form = document.querySelector(".js-form"), //form선택자
    input = form.querySelector("input"), //input선택자
    greeting = document.querySelector(".js-greeting"); //h4인삿말 선택자

const
    USER_LS = "currentUser", //로컬스토리지에서 가져온 유저 정보 라벨(키)
    SHOWING_CN = "showing"; //display제어할 css이름 Class Name

    function saveName(text) {
        localStorage.setItem(USER_LS, text); //로컬스토리지에 유저 정보(밸류) 저장
    }

    function handleSubmit(event) {
        event.preventDefault(); //기본 이벤트 동작하지 않게
        const currentValue = input.value; //인풋에 입력한 값을 변수에 저장
        paintGreeting(currentValue);
        saveName(currentValue);

    }

function askForName() { //이름정보가 없을 때 함수
    //console.log('no name');    
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) { //이름정보가 있을 때 함수
    //console.log('yes name');    
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);    
    greeting.innerText = `Hello ${text}`;
}

function loadName() { //이름 불러오기 함수
    //로컬스토리지에서 이름을 가져온다.
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null) {
        askForName();
        //이름 정보가 없을 때 함수 askForName 실행   
    } else {
        //이름정보가 있을 때 함수 paintGreeting 실행
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();
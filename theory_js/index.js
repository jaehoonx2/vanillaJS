const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
    // 다음 코드와 완전히 똑같은 역할을 한다
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if(!hasClass){
    //     title.classList.add(CLICKED_CLASS);
    // } else {
    //     title.classList.remove(CLICKED_CLASS);
    // }
}

function init(){
    title.addEventListener("click", handleClick);
    // parameter 함수를 handleClick으로 해야 함
    // handleClick()이면 그 자리에서 즉시 호출
}
init();

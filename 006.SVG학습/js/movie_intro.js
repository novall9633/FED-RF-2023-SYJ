// 영화 인트로 JS

// 애니메이션 클래스 적용대상
// 1. 라인 애니
let lineAni = document.querySelector(".stage");

// 2. 스틸컷 애니
let stcAni = document.querySelector("#stc");

// 3. 로고 애니
let logoAni = document.querySelector("#mlogo");

// [2] 시차로 애니메이션 대상에 클래스 넣기
// 공통 적용 클래스명 : anion
const setTime = (ele,time)=>{
    setTimeout(() => {
        ele.classList.add('anion');
    }, time);
}

// 1. 2초후 라인애니
setTime(lineAni,2000);
// setTimeout(() => {
//     lineAni.classList.add("anion");
// }, 2000);

// 2. 6초후 스틸컷 애니
setTime(stcAni,6000);
// setTimeout(() => {
//     stcAni.classList.add("anion");
// }, 6000);

// 3. 12초후 스틸컷 애니
setTime(logoAni,12000);
// setTimeout(() => {
//     logoAni.classList.add("anion");
// }, 12000);

// 오디오 컨트롤하기
// 대상 : .play-box
let playBox = document.querySelector(".play-box");
// 오디오 이미지 대상: .play-box img
let playBoxImg = document.querySelector(".play-box img");

playBox.addEventListener("mouseover", function () {
    // 오버시 진한 이미지로 변경
    // 경로에서 '.png' 를 '-1.png'로 변경
    playBoxImg.setAttribute("src", playBoxImg.getAttribute("src").replace(".png", "-1.png"));
});
playBox.addEventListener("mouseout", function () {
    playBoxImg.setAttribute("src", playBoxImg.getAttribute("src").replace("-1.png", ".png"));
});

// 오디오 요소
const myAudio = new Audio(document.querySelector(".my-audio").getAttribute("src"));
// 재생 시작시간 변경 : 값은 단위없이 숫자로 초단위
myAudio.currentTime = 30;
// 볼륨은 0~1 사이 소수점으로 표현(80%는 0.8)
myAudio.volume = 1;

playBox.addEventListener("click", function () {

    // 현재 오디오 멈춤여부 알아오기
    let isPaused = playBoxImg.getAttribute("src").includes("2") ? true : false;

    // 노래 중단되어 있는 상태
    if (isPaused) {
        // 중단 이미지로 변경
        playBoxImg.setAttribute("src", playBoxImg.getAttribute("src").replace("2-1", "1-1"));
        // 노래 재생
        myAudio.play();
    // 노래 진행되고 있는 상태
    } else {
        // 재생 이미지로 변경
        playBoxImg.setAttribute("src", playBoxImg.getAttribute("src").replace("1-1", "2-1"));
        // 노래 중단
        myAudio.pause();
    }
});

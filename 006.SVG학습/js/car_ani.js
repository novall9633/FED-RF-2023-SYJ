// 자동차 광고 애니 JS

// 라인애니
const lineAni = document.querySelector('.spath');
// 차
const mycar = document.querySelector('#mycar');
// 로고
const logo = document.querySelector('#logo');
// 버튼
const sbtn = document.querySelector('.sbtn');
// 오디오
const myaud = new Audio(document.querySelector("#myaud").getAttribute("src"));

// 공통 적용 클래스명 : anion
const setTime = (ele,time)=>{
    setTimeout(() => {
        ele.classList.add('anion');
    }, time);
}
const callAni = () =>{
    // 애니메이션 실행 순서대로 호출하기
    // [1] 라인 애니: 2초후 호출(10초간작동, 3초간 사라짐)
    setTime(lineAni,2000);
    
    // [2] 자동차 등장 및 작동 애니 : 12초후 호출(6초작동)
    setTime(mycar,12000);
    
    // [3] 로고 들어오기 : 16초후 호출
    setTime(logo,16000);
}//////callAni 함수 /////

// 시작버튼 클릭 설정///////
sbtn.addEventListener('click',function(){
    // 1. 자기자신 사라짐
    this.style.opacity=0;
    this.style.display="none";
    // 2. 애니 작동함수 호출
    callAni();
    // 3. 오디오 재생하기
    myaud.play();
});
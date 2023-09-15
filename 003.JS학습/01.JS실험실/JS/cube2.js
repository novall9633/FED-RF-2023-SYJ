// 회전제어 JS //////////////

/************************************* 
    [구현내용]
    - 마우스휠 이벤트에 따라 기본기능은 막고 큐브를 회전하는 속성인 transform의 rotateY(각도)의 값변경을 이용한 큐브 회전을 적용함
    - 대상 : window
    - 사용 이벤트 : wheel
    - 단위 각도: 360도 / 9개 = 40도 
    - CSS 이징적용 : ease-out

*************************************/

// DOM 함수 객체 //////////////
const domFn = {
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  
    // 이벤트셋팅함수
    addEvt: (ele, evt, fn) => ele.addEventListener(evt, fn),
}; /////// domFn 객체 /////////////


// 1. 대상 선정 : .cube
const cube = domFn.qs('.cube');
console.log(cube);

// 0. 변수세팅
// 단위 각도
const DEG = 40;
// 광휠 상태변수(0-허용,1-금지)
let stsWheel = 0;
// 휠제어시간
const TIME_WHEEL = 250;
// 휠 단위수(휠 할 때 증감하는 수)
let numWheel = 0;

///2. 이벤트 설정하기
domFn.addEvt(window,'wheel',rotateMem)

// 3. 함수 만들기 ///////
function rotateMem(){
    // 0. 휠 이벤트 발생 수 조절하기(광휠 금지)
    if(stsWheel) return; // 막기
    stsWheel = 1; // 잠금
    setTimeout(()=>stsWheel=0,TIME_WHEEL);

    // 휠방향 : 휠 델타 값
    let delta = event.wheelDelta
    
    // 2. 방향에 따른 휠 단위수 증감하기
    if(delta<0){
        // 휠 단위수 증가
        numWheel++;
    }else{
        // 휠 단위수 감수
        numWheel--;
    }
    
    // 3. 회전대상 요소에 각도 적용하기
    // 적용각도 = 단위각도 * 휠 단위수

    cube.style.transform = `rotateY(${numWheel*DEG}deg)`;
    // 확인
    console.log("wheel~",delta,numWheel);
}/////////////rotateMem 함수/////////////////////
// 옷소매 갤러리 JS - main.js
import dFn from './dom.js';

console.log(dFn);
// 1. 기능정의 : 버튼 클릭시 갤러리 박스를 잘라서 앞/뒤로 이동함
// 1-1. 오른쪽 버튼 클릭시 - 맨앞div 맨뒤로 이동
// -> 갤러리부모박스.appendChild(맨앞자식div)
// 1-2. 왼쪽버튼 클릭시 - 맨뒤div 맨앞으로 이동
// -> 갤러리부모박스.insertBefore(맨뒤자식div,맨앞자식div)

// 2. 대상선정
// 2-1. 이벤트 대상 : .abtn(이동버튼들)
const abtn = dFn.qsa('.abtn');
// 2-2. 변경대상 : .gbx(갤러리 부모박스)
const gbx = dFn.qs('.gbx');
console.log("대상/",abtn,gbx);

// 3.이벤트 설정하기 /////////////////////
abtn.forEach(ele=>{
    dFn.addEvt(ele,'click',goSlide);
});

// 광클금지변수(0-허용,1-불허)
let stsClick = 0;
// 잠금시간
const TIME_SLIDE = 400;

// 4.함수만들기 ////////////////////////
function goSlide(){
    // 0. 광클금지
    if(stsClick) return; // 돌아가 0은 false 1은 true
    stsClick = 1;
    setTimeout(()=>{
        stsClick=0
    },TIME_SLIDE);


    // 1. 버튼 구분하기
    let isR = this.classList.contains('rb');
    // 현재 갤러리 하위자식 div 요소 집합 새로읽기
    // 매번 순서가 바뀌니까 매번 새로 읽어야함
    let newList = dFn.qsaEl(gbx,'div');

    // 2. 기능 분기하기
    // 2-1. 오른쪽 버튼 : 맨 앞 div 맨뒤로 이동
    if(isR){ ////
        // 갤러리부모박스.appendChild
        gbx.appendChild(newList[0]);
    }////if////
    // 2-2. 왼쪽버튼 : 맨뒤div 맨앞으로 이동
    else{
        // -> 갤러리부모박스.insertBefore(맨뒤자식div,맨앞자식div)
        gbx.insertBefore(newList[newList.length-1],newList[0])
    }///else////
    console.log("고고씽",this, isR);
};//////////////goSlide함수////////////////

// 자동넘김용 호출함수 //////////////////////////
const goRight = () => gbx.appendChild(dFn.qsaEl(gbx,'div')[0]);

// 자동넘김용 변수(인터발용 : autoI, 타임아웃용 : autoT)
let autoI, autoT;

// 인터벌호출함수 //////////
const autoSlide = () => autoI = setInterval(goRight,3000);

// 인터벌 함수 최초호출
autoSlide();

// 인터발 지우기 함수
const clearAuto = () => {
    // 인터벌 지우기
    clearInterval(autoI);
    // 타임아웃 지우기
    clearTimeout(autoT);
    // 일정시간 후 작동
    autoT = setTimeout(autoSlide,5000);
}; //////clearAuto ////

// 버튼 클릭시 clearAuto 함수 호출하기
abtn.forEach(ele=>{
    dFn.addEvt(ele,'click',clearAuto);
});

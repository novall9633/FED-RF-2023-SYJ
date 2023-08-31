// 자동스크롤 JS - auto_scroll.js

/******************************************************************** 
    [ 자동 스크롤 기능 정의 ]
    1. 스크롤바가 없는 상태에서 마우스 휠 작동시
    아래와 같이 기능구현됨
        (1) 스크롤을 내림 : 다음 페이지로 이동
        (2) 스크롤을 올림 : 이전 페이지로 이동
    2. 스크롤바 첫페이지와 끝페이지에서 이동 안 함

    [ 자동 스크롤 이벤트 ]
    -> wheel 이벤트
    -> 마우스 휠 작동시 발생
    (이전 이벤트 명 : mousewheel / DOMMouseScroll(firefox))
********************************************************************/

// 1. 전역변수 설정하기
// 1-1. 페이지 변수
let pg_num = 0;
// 1-2. 휠 상태 변수
let sts_wheel = 0;
// 1-3. 전체 페이지수
let total_pg = 7;

// 새로고침시 첫페이지로 리셋하기
// 브라우저 스크롤바 위치 캐싱때문에
setTimeout(()=>{window.scrollTo(0,0)},500);

// 2. 이벤트 등록하기//////////////////////////////////
// 대상 : window
window.addEventListener('wheel',wheelFn);

window.addEventListener('DOMContentLoaded',loadFn);

// 3. 이벤트 연결하기//////////////////////////////////

// DOM선택함수//////////////////////////////////////
const qs = x => document.querySelector(x);
const qsa = x => document.querySelectorAll(x);

/******************************************************************** 
    함수명 : loadFn
    기능 : html 로딩 후 실행 코드구역
********************************************************************/
function loadFn(){
    // 호출확인
    console.log('로딩완료');

    // 전체 페이지 수 할당
    total_pg = qsa('.page').length;
    console.log('전체페이지수:',total_pg)
}/////////loadFn함수////////////////////////////

/******************************************************************** 
    함수명 : wheelFn
    기능 : 마우스 휠 작동시 페이지이동
********************************************************************/
function wheelFn(e){ //e -> 이벤트 전달변수
    // 함수 호출 여부
    console.log("휠~~~");

    // 0. 광휠 금지 설정///////
    if(sts_wheel) return; //여기서 나감
    sts_wheel = 1; //잠금
    setTimeout(()=>{sts_wheel=0},500); 
    //0.8초후 잠금 해제

    console.log("휠작동");

    // 1. 휠방향에 따른 페이지 변수 변경하기
    // 휠방향은 wheelDelta로 알아냄
    let delta = e.wheelDelta;
    
    // 음수(-)는 아랫방향, 양수(+)는 윗방향
    if(delta<0){
        pg_num++;
    }else if(delta>0){
        pg_num--;
    }

    // 한계수 체크(양끝 페이지 고정)
    if(pg_num < 0) pg_num=0;
    if(pg_num == total_pg) pg_num=total_pg-1;

    // 전체 페이지 번호 확인
    console.log("delta:",delta,"/pg_num:",pg_num);

    // 2. 페이지 이동하기
    // scrollTo(x축위치,y축위치)
    // 세로방향 이동은 2번째 값만 주면 된다
    // 스크롤 애니메이션은 html{scroll-behavior:smooth}로 처리
    // 화면단위로 이동하므로 윈도우 높이값을 기본값으로 처리
    // window.innerHeight -> window 높이값 구해온다

    
    window.scrollTo(0,window.innerHeight*pg_num);
    
} // wheelFn 함수////////////////////////////
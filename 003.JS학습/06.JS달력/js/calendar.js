// 달력구현 JS - calendar.js //////////////////

// DOM 메서드
const dFn = {
    qs : x => document.querySelector(x),
    qsa : x => document.querySelectorAll(x),
    cg : x => console.log(x),
    // 날짜찍기 형식변경함수(yyyy-mm-dd시간)
    fm : x =>`
    ${x.getFullYear()}
    -${x.getMonth()+1<10?
        '0'+(x.getMonth()+1):x.getMonth()+1}
    -${x.getDate()<10?
        '0'+x.getDate():x.getDate()} 
    (${week[x.getDay()]})`,
}; //////////dFn 객체 ////////////////
// 요일변경배열
const week = ["일","월","화","수","목","금","토"];
// 달력함수 호출
makeDallyeok();


function makeDallyeok(){
    dFn.cg("달려");

    // 1. 변수 셋팅 ///////////////////
    // (1) 변경할 현재 날짜 객체
    const currDate = new Date();
    // (2) 오늘 날짜 객체
    const today = new Date();
    // (3) 년도 요소 : .yearTit
    const yearTit = dFn.qs('.yearTit');
    // (4) 월 요소 : .MonthTit
    const monthTit = dFn.qs('.monthTit');
    // (5) 날짜 요소 : .dates
    const dates = dFn.qs('.dates');

    dFn.cg(yearTit);
    dFn.cg(monthTit);
    dFn.cg(dates);

    // 2. 함수 만들기 /////////////
    // (1) 달력 초기화구성 함수 ////////
    const initDallyeok = () => {

        // [ 전달 끝날짜,첫날짜 알아오기 ]
        // new Date(년도,월,0-끝날짜/1-첫날짜)
        // 전달값
        // (1)년도
        // (2)월
        // (3)옵션: 0 - 선택달끝날짜 / 1- 다음달 첫날짜

        // 1. 전달 마지막 날짜(옵션 : 0) 
        // -> 달력 처음 전달 끝 쪽 표시
    }; //////////////// initDallyeok 함수 ////////////
}///////////////// makeDallyeok 함수 /////////////////
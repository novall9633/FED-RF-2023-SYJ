// 글자등장1 JS - show_letter.js

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

// 1. 구현요구사항 : 
//  - 글자를 박스에 넣고 하나씩 날아오면서 등장
// 2. 대상선정 : .stage-letters
const stage = domFn.qs('.stage-letters');
console.log('대상:',stage);

// 3.글자 데이터 변수 할당
const myText = '인생에는 적극적인 의미의 즐거움, 행복이란 것이 존재하지 않는다.다만 고통과 권태가 있을 뿐이다.파티와 구경거리와 흥분되는 일들로 가득차 보이는 세상살이도 그 이면의 실상을 알고 보면 고통과 권태 사이를 왔다갔다 하는 단조로운 시계추의 운동과 다를 바 없는 것이다. 세상의 사이비 강단 철학자들은 인생에 진정한 행복과 희망과 가치와 보람이 있는 것처럼 열심히 떠들어대지만 나의 철학은 그러한 행복은 존재하지 않는다는 것을 명확히 가르침으로써 사람들로 하여금 더 큰 불행에 빠지지 않도록 하려는 것을 그 사명으로 한다. 인생에는 다만 고통이 있을 뿐이다. 가능한 한 그러한 고통을 피해가는 것이 삶의 지혜이고 예지이다. 그러므로 고통의 일시적 부재인 소극적 의미의 행복만이 인생에 주어질 수 있는 최상의 것이고, 현자의 도리는 바로 그러한 소극적 행복만을 추구하는 것이다.';

// 4. 데이터 글자 한글자씩 태그로 싸기
// for of 사용

// html태그 변수
let hcode= '';
// 순번 증가 변수
let seqNum = 0;

for(let x of myText){
    // console.log(x);
    if(x==' ') hcode += '&nbsp;';
    else hcode += `<span style="transition-delay: ${seqNum*0.04}s;">${x}</span>`;
    // &nbsp;는 공백문자로 no break space 약자
    // 순차적인 지연시간 생성을 위한 숫자변수 증가
    seqNum++;
}; //////for of문/////////////


// console.log(hcode);

// 5. 스테이지 박스에 코드 출력하기
stage.innerHTML = hcode;

// 6. 일정 시간 뒤 등장 클래스 .on 주기
setTimeout(() => {
    stage.classList.add('on');
}, 2000);
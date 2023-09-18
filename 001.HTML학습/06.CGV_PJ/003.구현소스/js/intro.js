// 인트로 페이지 JS - intro.js
// 비디오가 플레이 끝나면 첫페이지인 main.html로 자동이동하기
// 물론 클릭하면 이동됨

// 대상: #myvid
const myvid = document.querySelector('#myvid');
// 이벤트 : timeupdate -> 동영상 재생중 발생 이벤트
myvid.addEventListener('timeupdate',()=>{
    // 동영상 멈춤여부 알아내기 -> 비디오 요소.paused -> 멈춤상태면 true
    let isStop = myvid.paused;
    console.log("이벤트발생",isStop);

    // 2. 멈춤 상태이면 페이지 이동
    if(isStop){
        location.href='main.html';
    }//////////////if///////////////
    

});/////////////////timeupdate함수////////////
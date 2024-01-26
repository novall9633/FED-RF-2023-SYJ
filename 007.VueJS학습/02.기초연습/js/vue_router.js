// 뷰라우터를 위한 뷰인스턴스 생성 JS - vue_router.js

// 라우터 셋팅 가져오기
import router from "./router.js";
// import시 중괄호{} 없이 변수쓰면 보내는 곳에서 default로 보내는 것임
// 중괄호를 사용하여 변수를 쓰면 여러 변수를 보낼 수 있는 
// 일반적인 export만 사용하는 경우임

// 뷰 라우터에서 사용할 링크 셋팅 데이터
const linkData = {
    "세계여행사": { path: "/trip" },
    "세계먹거리": { path: "/foods" },
    "피자": { name: "umsik", params: { item: "피자", cls: "pizza" } },
    "파스타": { name: "umsik", params: { item: "파스타", cls: "pasta" } },
    "똠양꿍": { name: "umsik", params: { item: "똠양꿍", cls: "ddom" } },
};
// 하위메뉴 구조화 데이터 객체
const linkData2 = {
    "세계여행사": {
        link:{ path: "/trip" },
        menu:[]
    },
    "세계먹거리": {
        link:{ path: "/foods" },
        menu:{
            "피자": { 
                name: "umsik", 
                params: { item: "피자", cls: "pizza" } },
            "파스타": { 
                name: "umsik", 
                params: { item: "파스타", cls: "pasta" } },
            "똠양꿍": { 
                name: "umsik", 
                params: { item: "똠양꿍", cls: "ddom" } },

        }
    },
};
// 실제로 사용할 것은 linkData2임!(위에것과 비교)
// 뷰 인스턴스 객체 생성하기 ////
new Vue({
    // 대상요소
    el: "#app",
    router, // 라우터 인스턴스 등록 필수
    // 데이터 영역
    data:{
        // 외부 데이터를 뷰인스턴스 내부에 데이터화 한다
        linkData : linkData2, // 하위 메뉴 구조 데이터로 변경

    }, //// data ///
    // DOM 구성 후 첫페이지 라우터 설정하기
    mounted(){
        this.$router.push('/trip')
        // this 는 현재 뷰 인스턴스
        // $router는 라우터 전체 객체
        // push(경로) -> 강제로 경로 이동하기
    },

});///////////뷰인스턴스 //////////
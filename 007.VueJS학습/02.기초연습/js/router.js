// 뷰라우터 인스턴스 설정파일 - router.js

// 라우터 템플릿 만들기 : 내용 컴포넌트
let Trip = {
    template: `<div class="trip router">World Trip</div>`,
};
let Foods = {
    template: `
    <div v-bind:class="
        'foods router '+this.$route.params.cls
    ">
        World Foods {{ this.$route.params.item }}
    </div>`,
};

/* 
    [파라미터로 전달된 라우터 값을 읽는 코드법]
    this.$route.params.cls
    1. this는 현재 라우터를 사용하는 뷰 인스턴스
    2. $route는 현재 연결된 라우트 정보객체
    3. params는 라우트 하위 파라미터 전달 속성
    4. cls / item은 전달된 파라미터 이름
*/

// 뷰 라우터 인스턴스 생성하기
// const router = new VueRouter({ 
    //-> 변수에 담으면 아래쪽에 별도로 export한다
// export const router = new VueRouter({
    // -> default 없는 다중파일 export는 받는곳에서 
    // 중괄호 사용해야함
// 이름 없이 라우터를 내보내면 받는 곳에서 router로 보통 받는다
export default new VueRouter({
    routes:[
        // 첫번째 루트
        {
            path: '/trip',
            component:Trip
        },
        // 두번째 루트
        {
            path: '/foods',
            component:Foods
        },
        //  두번째 루트의 파라미터 버전 루트 추가
        {
            // 파라미터를 받는 같은 path의 루트는 
            // 호출과 구분을 위해 반드시 name속성을 설정해야함
            name: 'umsik',
            path: '/foods:item',
            // 경로 뒤에 콜론(:)을 쓰고 뒤에 파라미터 변수를 써준다
            components: Foods,
        },
    ],
});

// 변수에 담은 경우 하나 내보내기 아래쪽에 별도로함
// export default router;
// 01.컴포넌트 연습1.JS

// 뷰 JS 인스턴스 생성용 함수 : x는 대상요소
const makeVue = (x) =>
    new Vue({
        el: x,
    });

// 1. 제목에 넣을 전역 컴포넌트 만들기
// Vue.component(캐밥케이스 컴포넌트 태그명, {option})
// 이것으로 생성함
Vue.component("tit-comp", {
    template: `
        <strong>
            <span>
                🐽Vue JS 컴포넌트 : 
            </span>
            쇼핑모~~~~올 갤러리 리스트
        </strong>
    `,
}); /////////////////전역 컴포넌트1 ///////////

// 컴포넌트를 먼저 만들고 나서 뷰인스턴스 생성함
makeVue(".tit");

// 이미지 번호 숫자 증감 변수
let inum = 0;

// 상품명 배열
const goods = ["프레이컷", "아일렛기모", "베어부클", "포멀믹스톤"];

// 2. 갤러리 리스트에 넣을 전역 컴포넌트 만들기
// ->>> 자식컴포넌트!!
Vue.component("list-comp", {
    // 2-1. template 옵션 : 태그구성
    // src 속성을 셋팅된 변수를 적용하기 위해
    // 속성 앞에 v-bind:을 붙여서 v-bind:src
    // 로 쓰면 값으로 문자형을 써도 그 안의
    // 값은 변수가 된다.
    template: `
        <div>
            <img 
                v-bind:src="gsrc"
                v-on:click="goPapa('나는 신용진이다')"
                alt="의류 아이템">
            <aside>
                <h2 v-text="gname" v-on:mouseover="goMama({이름:'김고은',나이:'34살'})"></h2> 
                <h3 v-text="gprice" v-on:click="goPapa('나는 신용춘이다')"></h3>
            </aside>
        </div>
    `,
    // 2-2. props 옵션 : 
    // -> 부모 인스턴스 요소에서 v-bind: 속성명=값 으로
    // 전달한 속성변수를 받는 옵션
    // 사용법 ->>> props: []/{} 로 받음
    // [] 배열로 받으면 변수만 쓰고
    // {} 객체로 받으면 변수를 속성에,값은 데이터형을 씀
    props:['data-num','my-seq','end-let'],
    // props:{'data-num':String}, -> 데이터형 불일치로 에러
    // props:{'data-num':Number}, -> 데이터형 일치

    // props로 셋팅한 부모 전달 속성을 this 키워드와 함계
    // 변수형으로 사용하는 방법은??? 캐믈케이스로 변환 사용
    // 'data-num' -> this.dataNum



    // 2-3. data옵션: 컴포넌트 내부 변수 셋팅
    // 실행원리 : 컴포넌트가 빌드할 때 data 속성의 함수를 호출한다
    // 그래서 return 되는 객체값이 컴포넌트 내부에 전달된다
    data:function(){
        // 템플릿에서 사용할 변수는 반드시 리턴함!
        // 속성:값으로 구성된 객체를 리턴한다
        return{
            // 이미지 src
            gsrc : `images/${this.dataNum}.jpg`,
            // 상품명
            gname : 'DE-'+this.setName() + this.endLet,
            // 상품가격
            gprice : this.setPrice(),
        }
    },

    // 2-4. methods 속성 : 내부 메서드 셋팅
    methods:{
        // 자식 메서드에서 부모메서드를 호출한다
        goPapa(txt){
            // this.$emit(부모이벤트명,{전달값})
            // 부모가 만든 이벤트명은 여기서 hull
            this.$emit('hull',txt);
            // 과정 : 자식이벤트인 'click'이벤트가
            // 부모 컴포넌트에 셋팅된 'hull'이벤트로
            // 전달되어 거기 연결된 함수가 실행된다.
        },
        // 자식 컴포넌트의 오버이벤트가 전달되어 호출하는 함수
        goMama(pm){ // pm 전달변수
            this.$emit('got-kimchi',pm);
        },
        // 세자리 콤마 함수
        addCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        // inum을 1씩 증가하여 리턴함
        setNum(){
            inum+=1;
            // console.log("inum:"+inum);
            return inum;
        },
        // 상품명 만들기
        setName(){
            // 0~3 사이 난수
            let rdm = Math.floor(Math.random() * 4);
            // 이름 리턴
            return goods[rdm];
        },
        // 상품 가격 만들기
        setPrice(){
            let rdm = Math.ceil(Math.random() * 17)+3;
            return this.addCommas(20000* rdm) + "원";
        }
    }

}); //////////// 전역 컴포넌트 2 ////////////

// 리스트뷰 인스턴스 생성하기
// makeVue(".grid");
// [ 부모 컴포넌트에서 메서드 설정으로 해야 자식 컴포넌트가 호출할 수 있는 메서드가 만들어짐 ]
// ->>> 부모컴포넌트 ///
new Vue({
    el: '.grid',
    // 부모 뷰 인스턴스 메서드 구역
    methods:{
        // 자식 이벤트 전달 후 실행메서드
        goMsg(txt){
            alert('자식이 부모에게 이벤트 전달 성공!!!'+txt);
        },
        overMsg(pm){ //pm 전달변수
            alert('오 마이 갓김치'+pm.이름+' 나이는? '+pm.나이);
        },
    },
});

// 유튜브 아이프레임 컴포넌트
Vue.component("ifr-comp",{
    template:`
    <iframe
            width="49%"
            style="aspect-ratio: 16/9"
            v-bind:src="ifSrc"
            title="#고윤정 과 함께 차가운 겨울을 더욱 액티브하게!  l 디스커버리 23FW #goyounjung #크롭패딩"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
    ></iframe>
    `,
    props: ['data-id'], //-> this.dataId로 사용
    // data:function(){
    data(){
        return {
            ifSrc:`https://www.youtube.com/embed/${this.dataId}?autoplay=1&mute=1&loop=1&playlist=${this.dataId}`
        }
    }
});

// 부모 컴포넌트 인스턴스 생성하기
makeVue(".you-box");
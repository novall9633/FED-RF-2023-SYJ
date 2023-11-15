// 메인 페이지 컨텐츠 컴포넌트

import { Banner } from "../modules/Banner";
import { useEffect } from "react";

// 자동스크롤 JS 불러오기
import { autoScroll } from "../func/jquery-autoScroll";

// 제이쿼리 호출
import $ from 'jquery';
window.jQuery = $;
require('jquery-ui-dist/jquery-ui');
require('jquery-ui-touch-punch/jquery.ui.touch-punch');

export function MainCont(){

    // 메인페이지일때만 자동스크롤 기능 적용함
    useEffect(()=>{ // 랜더링 후 한번만 적용
        console.log('랜더링');
        // 자동스크롤 호출
        // autoScroll();

        // 드래그 기능 넣기
        // 대상은 .slide
        const slide = $('.slide');

        // 커버

        const cover = $('.cover')
        slide.draggable({axis:'x'})

        // 드래그가 끝났을 때 슬라이드 위치
        slide.on('dragstop',()=>{

            // 광드래그 막기
            cover.show();

            // 비교를 위한 윈도우 값
            let winW = $(window).width();
            // 현재 슬라이드 left값
            let pos = slide.offset().left;
            // 이동 차이수 = 슬라이드 위치값(양수) - 윈도우 가로값
            let diff = Math.abs(pos) - winW;
            // 결과해석 : 양수-> 왼쪽으로 이동/음수-> 오른쪽으로 이동

            // 기준값: 화면크기를 기준한 부분
            let gap = winW/10;
            console.log('드래그 멈춤',pos,winW,diff);

            // 왼쪽으로 이동하기
            if(diff>gap){
                slide.animate({left:"-200%"},800,'easeOutQuint',
                ()=>{
                    // 맨앞 li 맨뒤로 이동
                    slide.append(slide.find('li').first())
                    // left값 -100%(처음값)
                    .css({left:"-100%"})
                    // 커버제거
                    cover.hide();
                })
            }
            // 오른쪽으로 이동하기
            else if(diff<-gap){
                slide.animate({left:"0"},800,'easeOutQuint',
                ()=>{
                    // 맨뒤 li 맨앞으로 이동
                    slide.prepend(slide.find('li').last())
                    // left값 -100%(처음값)
                    .css({left:"-100%"})
                    // 커버제거
                    cover.hide()
                })
            }
            else {
                slide.animate({left:"-100%"},300,'easeOutQuint',
                ()=>{
                    // 커버제거
                    cover.hide()
                })
            }
        }); //////////dragstop ////////////////
    },[]); ///////////useEffect //////////////

    return(
        <>
            {/* 1. 배너페이지 */}
            <section id="ban" className="page" 
            style={{background:'lightblue'}}>
                <Banner />
            </section>
            <section className="page" 
            style={{background:'lightcoral'}}>
                
            </section>
            <section className="page" 
            style={{background:'lightgreen'}}>
                
            </section>
            <section className="page" 
            style={{background:'lightseagreen'}}>
                
            </section>
            <section className="page" 
            style={{background:'lightpink'}}>
                
            </section>
        </>
    )

} //////// MainCont 컴포넌트 ///////
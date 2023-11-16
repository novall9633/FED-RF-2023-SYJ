// 메인 페이지 컨텐츠 컴포넌트

import { Banner } from "../modules/Banner";
import { useEffect } from "react";

// 자동스크롤 JS 불러오기
import { autoScroll } from "../func/jquery-autoScroll";

// 드래그배너JS불러오기
import { dragBanner } from "../func/drag_banner";

export function MainCont(){

    // 메인페이지일때만 자동스크롤 기능 적용함
    useEffect(()=>{ // 랜더링 후 한번만 적용
        // console.log('랜더링');
        // 자동스크롤 호출
        autoScroll();

        // 드래그배너 호출
        dragBanner();

    },[])
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
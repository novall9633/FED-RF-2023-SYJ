// MainArea 컴포넌트

import { Outlet } from "react-router-dom";
import { Banner } from "../contents/Banner";
import { Character } from "../contents/Character";
import { Comics } from "../contents/Comics";
import { Games } from "../contents/Games";
import { Main } from "../contents/Main";
import { Movies } from "../contents/Movies";
import { News } from "../contents/News";
import { Video } from "../contents/Video";
import { SwiperApp } from "../plugin/SwiperApp";

export function MainArea(props){
    // cat 속성으로 메뉴분류 전달
    
    return(
        <main className="cont">
            <Outlet />
            
        </main>
    );
} ///////////////MainArea 컴포넌트 //////////
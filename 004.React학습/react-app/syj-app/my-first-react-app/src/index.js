// index.js는 public/index.html 페이지에 적용되는 컴포넌트다->루트 컴포넌트
import React from "react";
import ReactDOM from "react-dom/client";
// css도 불러온다
import "./css/index.css";
import { TopArea } from "./dc/layout/TopArea";
import { MainArea } from "./dc/layout/MainArea";
import { FooterArea } from "./dc/layout/FooterArea";

function App() {
    return (
        <>
            <TopArea />
            <MainArea />
            <FooterArea />
        </>
    );
}

// 컴포넌트 출력 ////////////
// 먼저 root객체 만들고
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render메서드로 출력
root.render(<App />);

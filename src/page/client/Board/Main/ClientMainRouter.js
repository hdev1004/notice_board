import React, { useEffect, useState } from "react";
import Menu from "page/client/Board/MenuBar/Menu";
import { BoardDiv } from "./css/ClientMainRouter";

import MainBoard from "./MainBoard";
import {  Route, Routes, useNavigate } from "react-router-dom";
import BestPost from "./BestPost";
import { throttle } from "lodash";
import { loginInfoState } from "state/login/recoil";
import { useRecoilState } from "recoil";
import { ScaleLoader } from "react-spinners";
import * as jwt from "./Function/jwt";

const App = () => {
    const [loginInfo, setLoginInfo] = useRecoilState(loginInfoState);
    const naviate = useNavigate();

    jwt.check_token(loginInfo, naviate); //토큰 체크

    let tab = [{
        title: "모모 게시판",
        link: "/aa"
    }, {
        title: "덕질 게시판",
        link: "/bb"
    }, {
        title: "자유 게시판",
        link: "/cc"
    }, {
        title: "문어 게시판",
        link: "/dd"
    }, {
        title: "우웩 게시판",
        link: "/ee"
    }, {
        title: "개발 게시판",
        link: "/ff"
    }]


    return (
        <BoardDiv className="body">  
            <Menu tab={tab}></Menu>

            <Routes>
                <Route path="/" element = {<MainBoard type={tab[0].link}></MainBoard>}></Route>
                {
                    tab.map((item) => (
                        <Route path={item.link} element={<MainBoard type={item.link}/>} />
                    ))
                }
                
                
            </Routes>
            
            
            <BestPost></BestPost>
            
            
        </BoardDiv>
    )
   
}

export default App;
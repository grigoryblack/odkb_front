import React from "react";
import './MainPage.css';
import Header from "../../components/header/Header";
import CollapsibleTable from "../../components/MainTable/MainTable";

const MainPage = () =>{
    return(
        <>
            <div className="main_container">
                <Header/>
                <div className="content_block">
                    <div className="title_content_block">Таблица новорожденных</div>
                    <CollapsibleTable/>
                </div>
            </div>
        </>
    )
}

export default MainPage;
import React from "react";
import Header from "../../components/header/Header";
import MainMenu from "../../components/MainMenu/MainMenu";
import './ChildrenPage.css';

const ChildrenPage = () =>{

    return(
        <>

            <div className="children_container">
                <Header/>
                <div className="children_content_container">
                    <MainMenu/>
                    <div className="content_card_container">
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChildrenPage;
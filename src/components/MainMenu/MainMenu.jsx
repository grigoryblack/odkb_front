import React from "react";
import './MainMenu.css';
import {Link} from 'react-router-dom';

function MainMenu() {
    return(
        <div className="menu_block">
            <div className="title_menu">Меню</div>
            <Link to="Initial_Inspection" className="menu_item">Первичный осмотр</Link>
            <Link to="Initial_Inspection" className="menu_item">Обоснование диагноза</Link>
            <Link to="Initial_Inspection" className="menu_item">Этапный эпикриз</Link>
            <Link to="Initial_Inspection" className="menu_item">Переводной эпикриз</Link>
            <Link to="Initial_Inspection" className="menu_item">Выписка из истории болезни</Link>
            <Link to="Initial_Inspection" className="menu_item">Форма ежедневного осмотра</Link>
            <Link to="Initial_Inspection" className="menu_item">Лист назначений</Link>
            <Link to="Initial_Inspection" className="menu_item">Листы консультаций специалистов</Link>
            <Link to="Initial_Inspection" className="menu_item">Лист телемедицинской консультации</Link>
        </div>
    )
}

export default MainMenu;
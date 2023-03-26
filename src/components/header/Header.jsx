import React, {useState} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {useLocalState} from "../../utils/useLocalState";

    function Header(){
    const [isActive, setIsActive] = useState(false);
    const [jwt, setJwt] = useLocalState('', 'jwt');
    const [fullName,setFullName] = useLocalState('','fullName');

    return(
        <>
            <div className="header_container">
                <div className="content-container">
                     <Link to="/" className="logo_header">«ОДКБ ОПН» </Link>
                    <div className="dropdown">
                        {/*В последствии заменяется на переменную*/}
                        <div className="dropdown-btn" onClick={(e)=> setIsActive(!isActive)}>{fullName}</div>
                        {isActive &&(
                        <div className="dropdown-content">
                            <button onClick={()=>(setJwt(null),window.location.href="/login")} className="exit_button">Выход</button>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
import React from "react";
import {Navigate} from 'react-router-dom';
import {useLocalState} from "../utils/useLocalState";

const PrivateRoute = ({children}) => {
    const [jwt,setJwt] = useLocalState("","jwt");
    return jwt ? children : <Navigate to="/Login"/>
}

export default PrivateRoute;


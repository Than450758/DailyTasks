import { Children } from "react";
import { Navigate,useLocation } from "react-router-dom";
 


const AuthCheck= ({children}) =>{
    const isAuthenticate =true
    ;
    const locatin = useLocation();
    if(!isAuthenticate){
        return <Navigate to='/auth/login' state={
            {
                from:locatin
            }
        }/>
    }

    return children;
    };

export default AuthCheck;
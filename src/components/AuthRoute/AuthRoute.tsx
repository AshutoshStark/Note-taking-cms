import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export  interface IAuthRouteProps{};

const AuthRoute: React.FunctionComponent<IAuthRouteProps>=props=>{

    const {children}:any = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading,setloading] = useState<any>(false);

    useEffect(()=>{
        AuthCheck();
    },[auth]);

    const AuthCheck = onAuthStateChanged(auth,(user)=>{
        if(user){
            setloading(false);
        }
        else{
            console.log('Unauthorized');
            navigate('/login');
        }
    });

    if(loading) return<p>loading.........</p>

    return<>{children}</>

    return(
        <div>

        </div>
    )
}

export default AuthRoute
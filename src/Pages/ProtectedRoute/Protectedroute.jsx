import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// const Protectedroute = (children) => {
//     const token =localStorage.getItem('jwt')
//     const navigate = useNavigate()

//     useEffect(()=>{

//         if(token){
//             return <Outlet/>
//             }
//         else{
//            navigate("/loginpage")
//         }

//     },[token])
   
// };

const Protectedroute = () => {
    const token = localStorage.getItem('jwt');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/loginpage');
        }
    }, [token, navigate]);
   
    return token ? <Outlet /> : null;
};

export default Protectedroute;
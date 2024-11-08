import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protectedroute from './Pages/ProtectedRoute/Protectedroute';
import Post from './Pages/Post/Post';
import RegisterPage from './Pages/Authentication/RegisterPage';
import Login from './Pages/Authentication/Login';


const App = () => {
  return (
    <div>
         <BrowserRouter>
        
        <Routes>
          {/* Home */}
          <Route path="/post" element={<Post />} />

          {/*    Authentication */}

          <Route path="/" element={<RegisterPage/>} />
          <Route path="/loginpage" element={<Login/>} />

           {/* <Route element={<Protectedroute/>}> */}

          {/* </Route> */}
        </Routes>
        
      </BrowserRouter>
   
    </div>
  );
};

export default App;
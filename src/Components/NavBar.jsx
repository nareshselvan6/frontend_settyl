import React from "react";
import "../Components/Components.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const NavBar = () => {

  const navigate=useNavigate();
  const dispatch=useDispatch();

const token=localStorage.getItem("jwt")

  const logout=()=>{
    localStorage.removeItem("jwt");
    dispatch(authenticationSuccessclear())
    navigate('/loginpage')
  }

  return (
    <div>
      
      <div className="totalnavbar ">
    <nav className="navbar navbar-expand-lg navbar-dark  navbar-shrink" id="mainNav">
  <div className="container-fluid">
  <div className="tsimagediv d-flex align-items-center gap-1 "> BLOGS </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      Menu
      <svg className="svg-inline--fa fa-bars ms-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>{/* <i class="fas fa-bars ms-1"></i> Font Awesome fontawesome.com */}
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
        <li className="nav-item"><Link className="nav-link" to="/">Register</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/loginpage">Login</Link></li>
        {token? <li className="nav-item"><Link className="nav-link " >Messages</Link></li>:null}
       {token? <li className="nav-item"><Link className="nav-link " >Friends</Link></li>:null}
       {token?  <li className="nav-item"><Link className="nav-link" >Notification</Link></li>:null}
        {token? <li className="nav-item"><Link className="nav-link" onClick={logout} >LogOut</Link></li>:null}
      </ul>
    </div>
  </div>
</nav>
</div>

    </div>



  );
};

export default NavBar;

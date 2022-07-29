import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-class   ">
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid d-flex justify-content-center">
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  "></span>
          </button>
          <div className="navbar_logo navbar-nav me-auto mb-2 mb-lg-0  m-4">
          <h2 className="text-white"> Ashwani_Singh</h2>

          </div>

          <div
            className="collapse navbar-collapse   "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  m-4">

            <li className="nav-item  p-4 pl-4">
                
                  
                
              </li>
              <li className="nav-item  p-4">
                <Link to="/">
                  
                  <h3> Home</h3>
                </Link>
              </li>
              <li className="nav-item p-4">
                <Link to="/projects">
                  
                  <h3> Project</h3>
                </Link>
              </li>
              <li className="nav-item p-4" >
                <Link to="/experience">
                  
                  <h3>Experience</h3>
                </Link>
              </li>
            </ul>
            <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  m-4">
              <li className="nav-item p-4">
            <Link to="/call_to-action"> <h3>ContactMe</h3></Link>
          
        </li><li className="nav-item p-4">
            <Link to="/cv"> <h3>CV</h3></Link>
          
        </li>   
              </ul>
            </div>
            
          </div>
        </div>
      </nav>
    </div>
    
  );
};

export default Navbar;

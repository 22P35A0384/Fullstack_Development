import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export const Navigation = (props) => {
  const Nav = useNavigate()
  const Getlogin=(e)=>{
    e.preventDefault()
    // document.getElementsByClassName('backgroundimg').style.backgroundImage="url('http://localhost:5000/img/space.jpg')"
    Nav('/login')
  }
  const Getsignup=(e)=>{
    e.preventDefault()
    // document.getElementsByClassName('backgroundimg').style.backgroundImage="url('http://localhost:5000/img/space.jpg')"
    Nav('/newaccount')
  }
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="#page-top" id="navigationmain">
            <img src="http://localhost:5000/img/nav_icon.jpg" alt="astec logo"/>
            <h1>ASTEC</h1>
          </a>{" "}
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Events
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Our AIM
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                COLLABORATIONS
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <a id="login" href="#" className="page-scroll">
                <button onClick={Getlogin} id="loginbtn">SIGN IN</button>
              </a>
            </li>
            <li>
              <a id="login" href="#" className="page-scroll">
                <button onClick={Getsignup} id="loginbtn">SIGN UP</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

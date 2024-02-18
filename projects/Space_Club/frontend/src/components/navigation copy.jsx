import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Navigationhome = (props) => {
  const Nav = useNavigate()
  const Getlogout=()=>{
    // e.preventDefault()
    // document.getElementsByClassName('backgroundimg').style.backgroundImage="url('http://localhost:5000/img/space.jpg')"
    Nav('/logout')
  }
  const Gotosettings=()=>{
    Nav('/editprofile')
  }
  const Gotohome=()=>{
    Nav('/home')
  }
  const Gotoprojects=()=>{
    Nav('/projects')
  }
  const[data,setdata] = useState({
    'profile':'',
    'fname':'',
    'lname':''
  })
  useEffect(() => {
    axios.get(`http://localhost:5000/getdata/${window.localStorage.getItem('user')}`).then((res) => {
        setdata({
          profile: res.data.profile,
          fname: res.data.fname,
          lname: res.data.lname
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  // window.location.reload()
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
              <a href='#features' className="page-scroll" onClick={() => window.location.href='/home#features'}>
                Events
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll" onClick={() => window.location.href='/home#about'}>
                Our AIM
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" onClick={() => window.location.href='/home#services'}>
                COLLABORATIONS
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll" onClick={() => window.location.href='/home#portfolio'}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll" onClick={() => window.location.href='/home#testimonials'}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll" onClick={() => window.location.href='/home#team'}>
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={() => window.location.href='/home#contact'}>
                Contact
              </a>
            </li>
            <li>
              <div class="dropdown">
                <img src={`http://localhost:5000/profile/${data.profile}`} id="profileimg" class="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{textAlign:'center',padding:'20px'}}>
                  <img src={`http://localhost:5000/profile/${data.profile}`} id="profilesubimg"/>
                  <h3>{data.fname} {data.lname}</h3>
                  <a class="dropdown-item" id="profilea" href="#" onClick={()=>{Gotohome()}}>HOME</a><br/>
                  <a class="dropdown-item" id="profilea" href="#" onClick={()=>{Gotoprojects()}}>PROJECTS</a><br/>
                  <a class="dropdown-item" id="profilea" href="#" onClick={()=>{Getlogout()}}>TEAMS</a><br/>
                  <a class="dropdown-item" id="profilea" href="#" onClick={()=>{Gotosettings()}}>SETTINGS</a><br/>
                  <a class="dropdown-item" id="profilea" href="#" onClick={()=>{Getlogout()}}>LOGOUT</a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

import axios from "axios";
import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigationhome } from "./navigation copy";

function Changepass(){
    const setBackgroundImage = () => {
        document.querySelector('.backgroundimg').style.backgroundImage = "url('http://localhost:5000/img/space1.webp')";
        document.querySelector('.backgroundimg').style.backgroundSize = "cover";
    };
    setBackgroundImage();
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            alert('Please Login Your Account')
            window.location.href='/login'
        }
    },[])
    const Nav = useNavigate()
    // document.getElementById('body').style.backgroundImage="url('./main.jpg')"
    const [changepass, setchangepass] = useState({
        'oldpass':'',
        'newpass':'',
        'cnfpass':''
    });
    const [upper, setupper] = useState(0)
    const [lower, setlower] = useState(0)
    const [spc, setspc] = useState(0)
    const [num, setnum] = useState(0)
    const [len, setlen] = useState(0)
    const sp = "~@`!#$%^&*+=-[]()_.';,/{}|\":<>?";
    const checkpass = (e) => {
        var upper = 0;
        var lower = 0;
        var spc = 0;
        var num = 0;
        var x = e.target.value;
        for (var i=0;i<x.length;i++){
            if(x[i]===x[i].toUpperCase() && isNaN(x[i]) && !(sp.includes(x[i]))){
                upper+=1;
            }else if(x[i]===x[i].toLowerCase() && isNaN(x[i]) && !(sp.includes(x[i]))){
                lower++;
            }else if(sp.includes(x[i])){
                spc++;
            }else{
                num++;
            }
        }
        setupper(upper)
        setlower(lower)
        setspc(spc)
        setnum(num)
        setlen(x.length)
        // console.log(upper)
        // console.log(lower)
        // console.log(spc)
        // console.log(num)
        // console.log(x)
    } 
    const Submit=(e)=>{
        if(!changepass.oldpass){
            alert('Enter Your Old Password')
        }else if(!changepass.newpass){
            alert('Enter Your New Password')
        }else if(!changepass.cnfpass){
            alert('Re-Enter Your New Password')
        }else if(changepass.newpass!=changepass.cnfpass){
            alert('Password Mismatch')
        }else if(upper===0){
            // e.preventDefault()
            alert('Password Must Contain One Captal Letter')
        }else if(lower===0){
            // e.preventDefault()
            alert('Password Must Contain One Lower Letter')
        }else if(spc===0){
            // e.preventDefault()
            alert('Password Must Contain One Special Character')
        }else if(num===0){
            // e.preventDefault()
            alert('Password Must Contain One Number')
        }else if(len<8){
            // e.preventDefault()
            alert('Password Must Contain Atleast 8 Characters')
        }else{
            axios.put('http://localhost:7416/changepass/'+localStorage.getItem('user')+'/'+changepass.oldpass+'/'+changepass.newpass).then((response)=>{
                alert(response.data.msg)
                window.location.href="/login"
            })
        }
    }
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [databymail, setdatabymail] = useState([])
    const id = localStorage.getItem('user')
    useEffect(()=>{
        axios.get('http://localhost:7416/getdatabyemail/'+id).then((response)=>{
            setdatabymail(response.data.logindata)
            // console.log(databymail.username)
        })
    },[])
    const Gotologin = () =>{
        Nav('/logout')
    }
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
    return(
        <div>
            <Navigationhome />
            <div style={{paddingTop:'4%'}}>
                <div style={{textAlign:'center'}}>
                    <Link to={'/editprofile'}><button id="navbtn">EDIT PROFILE</button></Link>
                    <Link to={'/changepassword'}><button style={{backgroundColor:'red'}} id="navbtn">CHANGE PASSWORD</button></Link>
                    <Link to={'/deleteaccount'}><button id="navbtn">DELETE ACCOUNT</button></Link>
                </div>
                <div id="loginblock" style={{position:'relative',top:'150px',left:'900px',paddingBottom:'50px'}}>
                    <h4 style={{position:'relative',top:'25px'}}>CHANGE PASSWORD</h4>
                    <hr style={{position:'relative',top:'20px'}} id="hr"/>
                    <input id="loginblock2" type="password" placeholder="Enter Your Old Password" onChange={(e)=>setchangepass({...changepass,oldpass:e.target.value})}/><br/><br/>
                    <input id="loginblock2" type="password" placeholder="Enter Your New Password" onChange={(e)=>setchangepass({...changepass,newpass:e.target.value},checkpass(e))}/><br/><br/>
                    <input id="loginblock2" type="password" placeholder="Re-Enter New Password" onChange={(e)=>setchangepass({...changepass,cnfpass:e.target.value})}/><br/><br/>
                    <button id="loginbutton1" onClick={()=>Submit()}>SUBMIT</button><br/>
                </div>
            </div> 
        </div>
    )
}

export default Changepass;
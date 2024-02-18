import { Link,useNavigate } from "react-router-dom"
import { useEffect,useState } from "react"
import axios from "axios"
import { Navigationhome } from "./navigation copy";

function DeleteAcc(){
    const setBackgroundImage = () => {
        document.querySelector('.backgroundimg').style.backgroundImage = "url('http://localhost:5000/img/space1.webp')";
        document.querySelector('.backgroundimg').style.backgroundSize = "cover";
    };
    setBackgroundImage();
    const Nav = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            alert('Please Login Your Account')
            window.location.href='/login'
        }
    },[])
    const [conform,setconform] = useState({
        'mail':'',
        'pass':''
    })
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
    const Delete=()=>{
        if(!conform.mail){
            alert('Enter Your Email')
        }else if(!conform.pass){
            alert('Enter Your Password')
        }else if(conform.mail!==databymail.email){
            alert('Invalid Mail!')
        }else if(conform.pass!==databymail.password){
            alert('Invalid Password!')
        }else{
            axios.delete('http://localhost:7416/deleteacc/'+id).then((response)=>{
                alert(response.data.msg)
                Nav('/logout')
            })
        }
    }
    return(
        <div>
            <Navigationhome />
            <div style={{paddingTop:'4%'}}>
                <div style={{textAlign:'center'}}>
                    <Link to={'/editprofile'}><button id="navbtn">EDIT PROFILE</button></Link>
                    <Link to={'/changepassword'}><button id="navbtn">CHANGE PASSWORD</button></Link>
                    <Link to={'/deleteaccount'}><button style={{backgroundColor:'red'}} id="navbtn">DELETE ACCOUNT</button></Link>
                </div>
                <div id="loginblock" style={{position:'relative',top:'150px',left:'900px',paddingBottom:'50px'}}>
                    <h4 style={{position:'relative',top:'25px'}}>DELETE ACCOUNT</h4>
                    <hr style={{position:'relative',top:'20px'}} id="hr"/>
                    <input id="loginblock2" type="email" placeholder="Enter Your Mail Id" onChange={(e)=>setconform({...conform,mail:e.target.value})}/><br/><br/>
                    <input id="loginblock2" type="password" placeholder="Enter Your Password" onChange={(e)=>setconform({...conform,pass:e.target.value})}/><br/><br/>
                    <button id="loginbutton1" onClick={()=>Delete()} >SUBMIT</button><br/>
                </div>
            </div>
        </div>
    )
}

export default DeleteAcc;
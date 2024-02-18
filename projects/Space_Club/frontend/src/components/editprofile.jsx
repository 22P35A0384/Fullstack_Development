import { Link ,useNavigate} from "react-router-dom";
import { useEffect,useRef,useState } from "react";
import axios from "axios";
import { Navigationhome } from "./navigation copy";

function Editprofile(){
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
    const Nav = useNavigate();
    const id = localStorage.getItem('user');
    const [databymail, setdatabymail] = useState([]);
    const imageref = useRef(null)
    const [image, setimage] = useState('');
    const changeimg=()=>{
        imageref.current.click();
    }
    const [editdata, seteditdata] = useState({
        'fname': '',
        'lname': '',
        'email': '',
        'myimg': ''
    });

    useEffect(() => {
        const id = localStorage.getItem('email')
        console.log(id)
        axios.get(`http://localhost:5000/getdata/${id}`).then((response) => {
            const data = response.data.logindata;
            console.log(data)
            setdatabymail(data);
            seteditdata({
            'fname': data.fname,
            'lname': data.lname,
            'email': data.email,
            'myimg': ''
            });
        });
    }, [Nav, id]);

    const Savedata = () => {
        if(!editdata.myimg){
            axios.put(`http://localhost:7416/editdata/${id}`,editdata).then((response)=>{
                alert(response.data.msg)
                window.location.reload()
            })
            // alert(editdata.myimg)
        }else{
            const neweditdata = new FormData()
            neweditdata.append('fname',editdata.fname)
            neweditdata.append('lname',editdata.lname)
            neweditdata.append('email',editdata.email)
            neweditdata.append('myimg',editdata.myimg)
            axios.put(`http://localhost:7416/editdataimg/${id}`,neweditdata).then((response)=>{
                alert(response.data.msg)
                window.location.reload()
            })
            // alert(editdata.myimg)
            // console.log(editdata.myimg)
        }
    };
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
                    <Link to={'/editprofile'}><button style={{backgroundColor:'red'}} id="navbtn">EDIT PROFILE</button></Link>
                    <Link to={'/changepassword'}><button id="navbtn">CHANGE PASSWORD</button></Link>
                    <Link to={'/deleteaccount'}><button id="navbtn">DELETE ACCOUNT</button></Link>
                </div>
                <div id="loginblock" style={{position:'relative',top:'80px',left:'900px', backgroundColor:' rgb(219, 208, 84)'}}>
                    <div id="editimgdiv">{image ? <img onClick={changeimg} id="editimg" src={URL.createObjectURL(image)} alt="profile img"/> : <img id="editimg" onClick={changeimg} src={`http://localhost:5000/profile/1708077067461_22P35A0384.jpg`} alt="profileImg"/>}</div><br/>
                    <input id="loginblock1" value={editdata.fname} type="text" placeholder="Enter Your First Name" onChange={(e)=>seteditdata({...editdata,fname:e.target.value})}/><br/><br/>
                    <input id="loginblock1" value={editdata.lname} type="text" placeholder="Enter Your Last Name" onChange={(e)=>seteditdata({...editdata,lname:e.target.value})}/><br/><br/>
                    <input id="loginblock1" value={editdata.email} type="email" placeholder="Enter Your Mail" onChange={(e)=>seteditdata({...editdata,email:e.target.value})}/><br/><br/>
                    <input style={{display:'none'}} className="fileinput" type="file" ref={imageref} onChange={(e)=>seteditdata({...editdata,myimg:e.target.files[0]},setimage(e.target.files[0]))}/><br/><br/>
                    <button id="loginbutton" onClick={()=>Savedata()}>SAVE</button>
                </div>
            </div>
        </div>
    )
}

export default Editprofile;
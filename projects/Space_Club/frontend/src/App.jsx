import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation.jsx";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import NewAccount from "./components/newaccount";
import Home from "./components/home";
import Logout from "./components/logout.jsx";
import Forgotpassword from "./components/forgotpass.jsx";
import Editprofile from "./components/editprofile.jsx";
import Changepass from "./components/changepass.jsx";
import DeleteAcc from "./components/deleteacc.jsx";
import Projects from "./components/projects.jsx";
import Addproject from "./components/addproject.jsx";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const setBackgroundImage = () => {
    document.querySelector('.backgroundimg').style.backgroundImage = "url('http://localhost:5000/img/whitebg.jpg')";
    document.querySelector('.backgroundimg').style.backgroundSize = "cover";
  };
  // console.log(window.localStorage.getItem('profile'))
  setBackgroundImage();
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Navigation />
//       <Header data={landingPageData.Header} />
//       <Features data={landingPageData.Features} />
//       <About data={landingPageData.About} />
//       <Services data={landingPageData.Services} />
//       <Gallery data={landingPageData.Gallery} />
//       <Testimonials data={landingPageData.Testimonials} />
//       <Team data={landingPageData.Team} />
//       <Contact data={landingPageData.Contact} />
//         <Routes>
//           <Route path='/login' element={<Login/>}/>
//         </Routes>
//       </BrowserRouter>
      
//     </div>
//   );
// };

return (
  <div className="App">
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <About data={landingPageData.About} />
            <Services data={landingPageData.Services} />
            <Gallery data={landingPageData.Gallery} />
            <Testimonials data={landingPageData.Testimonials} />
            <Team data={landingPageData.Team} />
            <Contact data={landingPageData.Contact} />
          </>
        }/>
        <Route path="/login" element={<Login />} />
        <Route path="/newaccount" element={<NewAccount/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/forgotpassword" element={<Forgotpassword/>}/>
        <Route path="/editprofile" element={<Editprofile/>}/>
        <Route path="/changepassword" element={<Changepass/>}/>
        <Route path="/deleteaccount" element={<DeleteAcc/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/addnewproject" element={<Addproject/>}/>

      </Routes>
    </BrowserRouter>
  </div>
);
};

export default App;

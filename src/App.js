import './App.css';
import React from "react";
import FullName from "./profile/FullName";
import Adress from "./profile/Address";
import ProfilePhoto from "./profile/ProfilePhoto.jpg";
function App() {
  return (
    <div className="App">
       <>
   <FullName  />
       </>
       <>
   <Adress />
       </>
       
   <img  src={ProfilePhoto}  alt="ProfilePhoto" />
       
    </div>
  );
}

export default App;

import React,{useState} from "react";
import './App.css';

function App(props) {
  const [bio,setBio]=useState("");
  return (
    <div className="OuterContainer">
      <textarea id="area" value={bio} 
      onChange={(e)=>{
        setBio(e.target.value)
      }}></textarea>
      <br/>
      <button id="btn" onClick={()=>{
        let newBio=bio
        setBio(newBio.toUpperCase())
      }}>Change To UpperCase
      </button>
      <p id="para">{bio}</p>
    </div>
    );
}

export default App;
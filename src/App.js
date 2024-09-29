import logo from './logo.svg';
import './App.css';
import {auth} from "./config/firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {useState} from  'react'
import {Auth} from "./components/auth.js"
import {Post} from "./components/post.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from './pages/signIn.js';
import { PostPage } from './pages/postPage.js';
import ReactDOM from "react-dom/client";
import { BuddyPage } from './pages/buddyPage.js';
import {ProfilePage} from './pages/profilePage.js'
import { HomePage } from './pages/homePage.js';
import { NavBar } from './components/navbar.js';

function App() {
  const myStyle = {
    backgroundColor: "#D4F4DD",
    padding: "10px",
    fontFamily: "helvetica",
    width : "100vw",
    height : "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center top"
  };
  return(
    <div style={myStyle}>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="home" element={<HomePage/>} />
        <Route path="posts" element={<PostPage />} />
        <Route path='buddy' element={<BuddyPage/>} />
        <Route path='profile/:userId' element={<ProfilePage />} />
        <Route path='login' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
  
}

export default App;

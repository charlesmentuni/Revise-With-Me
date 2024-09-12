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

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="posts" element={<PostPage />} />
        <Route path='buddy' element={<BuddyPage/>} />
        <Route path='profile/:userId' element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
  
}

export default App;

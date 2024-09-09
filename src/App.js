import logo from './logo.svg';
import './App.css';
import {auth} from "./config/firebase"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {useState} from  'react'
import {Auth} from "./components/auth.js"
import {Post} from "./components/post.js"

function App() {
  return(
    <div>
      <Auth />
      <Post postId="9g8kZKxFLAf8J5jvzl8U" />
    </div>

  )
  
}

export default App;

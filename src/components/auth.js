import { auth } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { useState, useEffect } from "react";

export const Auth = () =>
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(""); 

    const signIn = async () =>{
        try{
            await signInWithEmailAndPassword(auth, email, password);
            setUser(email);
        }
        catch(err){
            console.error(err);
        }
    }

    const signUp = async () =>
    {
        await createUserWithEmailAndPassword(auth, email, password).catch((err)=> {console.error(err)});
        setUser(email)
    };
    
    const logOut = async () => {

        await signOut(auth).catch((err) => console.error(err));
        setUser("");
    }
    return (
    <div>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signUp}>Sign Up</button>
        <button onClick={signIn}>Sign In</button>
        <button onClick={logOut}>Sign Out</button>
        <h2>Current User: {user}</h2>
    </div>
    );
}
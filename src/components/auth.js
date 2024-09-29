import { auth, db } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {setDoc, doc} from "firebase/firestore";
import { useState, useEffect } from "react";

export const Auth = () =>
{
    const [cont, setCont] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(""); 

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>
        {
            if (user){
                setUser(user.email);
            }
            else{
                setUser("");
            }
        })
    }, []);

    const signIn = async () =>{
        try{
            await signInWithEmailAndPassword(auth, email, password);
        }
        catch(err){
            console.error(err);
        }
    }

    const signUp = async () =>
    {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(async () =>
            {await setDoc(doc(db, `people/${auth.currentUser.uid}`), 
                {buddy:"", first_name: "", last_name: ""}) }
               )
        .catch((err)=> {console.error(err)});
        
    };
    
    const logOut = async () => {

        await signOut(auth).catch((err) => console.error(err));
    }
    
    return (
    <div>
        
        <button onClick={signIn}>Sign In</button>
        <button onClick={logOut}>Sign Out</button>
        <h2>Current User: {auth.currentUser && auth.currentUser.email}</h2>
        <div class="d-flex justify-content-center">
            <div class="card p-4 w-50" >
                <h1>Sign Up</h1>
                <p class="fw-bold mb-0 mt-4" >Email:</p>
                <input class="mb-4" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <p class="fw-bold mb-0 mt-4">Password:</p>
                <input class="mb-4" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                
                <button class="btn btn-primary" onClick={signUp}>Continue</button>
                <a href="login" class="text-center mt-3"> Already have an account? Login here</a>
            </div>
            
        </div>
    </div>
    );
}
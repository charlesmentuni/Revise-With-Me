import { useEffect } from "react"
import { Auth } from "../components/auth"
import { onAuthStateChanged } from "firebase/auth"

export const SignIn = () =>
{
    
    return (
        <div>
            <Auth />
        </div>
    )
}
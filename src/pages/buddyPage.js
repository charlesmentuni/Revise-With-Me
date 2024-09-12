import { useEffect, useState } from "react"
import {ref, uploadBytes} from "firebase/storage"
import {auth, storage, db} from "../config/firebase"
import { getDoc, doc } from "firebase/firestore";
import { Post } from "../components/post";
import {Auth} from "../components/auth"
import { Buddy } from "../components/buddy";

export const BuddyPage = () =>  {

   
   
    return(
        <div>
            <Auth />
            <Buddy />
        </div>
    )
}
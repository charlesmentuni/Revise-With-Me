import { useEffect, useState } from "react"
import {ref, uploadBytes} from "firebase/storage"
import {auth, storage, db} from "../config/firebase"
import { getDoc, doc } from "firebase/firestore";
import { Post } from "../components/post";


export const Buddy = () =>  {

    const [fileUpload, setFileUpload] = useState(null);
    const [user1, setUser] = useState(null);
    const [unverifiedPosts, setUnverifiedPosts] = useState([]);

    const uploadFile = async () =>
    {   
        if (!fileUpload){return;}
        const filesFolderRef = ref(storage, `user_images/${auth.currentUser.uid}/`+fileUpload.name);
        await uploadBytes(filesFolderRef, fileUpload).catch((err)=>{console.error(err);});

    }

    const getCurrentUser = async () => {
        if (auth.currentUser) {
            await getDoc(doc(db, `people/${auth.currentUser.uid}/`))
                .catch((err)=>console.error(err))
                .then((dat) => {
                    const filteredData = {...dat.data(), id: dat.id};
                    setUser(filteredData);
                });
            
        }
    }

    const getUnverifiedPosts = async () => {
        if (!user1){return;}
        try{
            const rawData = await getDoc(doc(db, `people/${user1.id}/buddy/${user1.buddy}`));
            const appendedPosts = [rawData.data()];
            setUnverifiedPosts(appendedPosts);
        }
        catch (err){
            console.error(err);
        }
    }

    useEffect(() => {getCurrentUser();}, [auth.currentUser]);
    useEffect(() => {getUnverifiedPosts();}, [user1]);
    useEffect(()=> {console.log(unverifiedPosts)}, [unverifiedPosts]);

    return(
        <div>
            <div>
                <h1> Verify Posts </h1>
                {unverifiedPosts && 
                            unverifiedPosts.map((e)=>(
                                <div>
                                    <Post postId={e}/>
                                </div>
                            ))
                }
                <button>Verify Post</button>
            </div>
            <input onChange={(e) => setFileUpload(e.target.files[0])} type="file"/>
            <button onClick={uploadFile}>Upload File</button>
        </div>
    )
}
import { useEffect, useState } from "react";
import {db, auth} from "../config/firebase";
import { doc, getCountFromServer, getDoc,setDoc , collection, updateDoc} from "firebase/firestore";



export const Post = ({postId}) =>
{
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [likesCount, setLikesCount] = useState(0);

    const postRef = doc(db, `posts/${postId}`);
    const [userRef, setUserRef] = useState(null);

    const getPost = async () => 
    {
        // This function retrieves the post specified and filters it 
        // so that it's in a more readable form
        try
        {
            const rawData = await getDoc(postRef);
            const filteredData = {...rawData.data(), id : rawData.id}
            setPost(filteredData);
            setUserRef(doc(db, `people/${filteredData.user}`));
        }
        catch (err)
        {
            console.error(err);
        }
    }
    const getUser = async () => 
        {
            // This function retrieves the user whom created the post and filters it 
            // so that it's in a more readable form
            try
            {
                const rawData = await getDoc(userRef);
                const filteredData = {...rawData.data(), id : rawData.id};
                setUser(filteredData);
            }
            catch (err)
            {
                console.error(err);
            }
        } 
    const likePost = async () => {
        // might be better using post.id
        try{
            await setDoc(doc(db, `posts/${postId}/likes`, auth.currentUser.uid), {});
            getLikes();
        }
        catch(err){
            console.error(err);
        }
        //await setDoc()
    }
    const getLikes = async () =>
    {
        const coll = collection(db, `posts/${postId}/likes`);
        const snapshot = await getCountFromServer(coll);
        setLikesCount(snapshot.data().count);
    }

    const [newComment, setNewComment] = useState("");

    const submitComment = async () =>
    {
        await updateDoc(doc(db, `posts/${postId}`) , {"comments" : [...post.comments, newComment]}).catch((err) => console.error(err));
        getPost();
    }

    useEffect(() => {getPost();}, []);
    useEffect(() => {getUser();}, [userRef]);
    useEffect(() => {getLikes();}, []);

    
    return (
        <div>
            {post && user && 
                <div>
                    <h1>{user.first_name} has just revised {post.title}</h1>
                    <p>{post.description}</p>
                    <div>
                        <p>{likesCount} Likes</p>
                        <button onClick={likePost}>Like</button>
                    </div>

                    {post.comments && (
                    <div>
                        <h2>Comment Section</h2>
                        {post && post.comments.map((element) => (<p>{element}</p>) )}
                        <input placeholder="Comment" onChange={(e) => setNewComment(e.target.value)}></input>
                        <button onClick={submitComment}>Submit Comment</button>
                    </div>)}
                    
                </div>}
            
        </div>
    )
}
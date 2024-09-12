import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react';
import {getDoc, doc} from 'firebase/firestore'
import {db} from '../config/firebase'

export const Profile = () => {
    const userId = useParams();
    const [user, setUser] = useState({});
    const getUser = async () => 
        {
            // This function retrieves the user whom created the post and filters it 
            // so that it's in a more readable form
            try
            {
                const rawData = await getDoc(doc(db, `people/${userId.userId}`));
                const filteredData = {...rawData.data(), id : rawData.id};
                setUser(filteredData);
            }
            catch (err)
            {
                console.error(err);
            }
        } 
    useEffect(() => getUser,[]);
    console.log(user);
    return(
        <div>
           <h1>{userId.userId}</h1>
           {user && 
                (<div>
                    <h2>{user.first_name} {user.last_name}</h2>
                </div>)}
        </div>
    )
}
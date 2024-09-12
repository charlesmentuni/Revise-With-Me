import { useParams } from 'react-router-dom'
import {Profile} from '../components/profile'

export const ProfilePage = () => {
    const userId = useParams();
    console.log(userId);
    return (
        <div>
            <Profile userId={userId}/>
        </div>
    )

}


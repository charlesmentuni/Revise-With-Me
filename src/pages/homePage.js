import {NavBar} from "../components/navbar"

export const HomePage = () =>
{
    
    return (
        
        <div>
            <NavBar></NavBar>
            <div class="jumbotron m-4 p-4 rounded" style={{backgroundColor : "#f9f9f9"}}>
                <h1 class="display-2 text-center fw-bold">Welcome to Revise With Me</h1>
                <p class="p-3"> Welcome to the next generation of learning! Our platform combines the best of social media with the power of revision, allowing students to share their notes, study tips, and revision resources with a global community of learners. Whether you're preparing for exams, mastering a new topic, or looking to stay motivated, this is your space to post your progress, discover new study techniques, and collaborate with others. With interactive features, customizable profiles, and real-time feedback, we're turning revision into a social experience that helps you learn better, faster, and together. Share, revise, and succeed!</p>
                <div class="px-4 d-flex justify-content-center">
                    <button class="btn btn-primary rounded m-1 px-3">Sign Up</button>
                    <button class="btn btn-primary rounded m-1 px-3">Login</button>
                </div>
                

            </div>            
        </div>
    )
}
import {react} from "react"
import "../App.css"
import {Link} from "react-router-dom"
function LandingPage(){
    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>we Chat</h2>
                </div>
                <div className="navlist">
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <div role="button">
                        <p>Login</p>
                    </div>
                </div>
            </nav>
            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color: "orange"}}>Connect</span> with your friends and loved one</h1>
                    <p>Cover a distance by We chat video calll</p>
                    <div role="button">
                        <Link to={"/home"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/landingPage.png" alt="Could not load the image"/>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
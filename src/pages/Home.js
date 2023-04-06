import { Fragment } from "react";
import StartScreen from "../components/StartScreen";
const Home=()=>{
    return(
        <Fragment>
            <StartScreen/>
            <a href="https://www.linkedin.com/in/ajay-pratap-singh-83a424192/">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="logo" />
            </a>
        </Fragment>
        
    )
}
export default Home;
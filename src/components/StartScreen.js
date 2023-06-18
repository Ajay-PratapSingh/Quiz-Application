import { Link } from "react-router-dom";
import "./Card.css"
import startscreen_image from "../images/undraw_road_to_knowledge_m8s0.svg";

const StartScreen = (props) => {
    return (
        <div className="alltest-wrapper">
            <div className="card">
                <strong>Quiz App</strong>
                <p>Create and take quizes</p>
                <div className="button-wrapper">
                    <Link to={"create"} className="btn">Create quiz</Link>
                    <Link to={"tests"} className="btn">View all quiz</Link>
                </div>
            </div>
            <div>
                <img src={startscreen_image} alt=" a person stepping on books as a ladder to success" className="illustration-ss"></img>
            </div>
        </div>

    )
}
export default StartScreen;
import { useState } from "react";
import "./Card.css"
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import exampleImage from "../images/undraw_educator_re_ju47.svg";

const CreateForm = (props) => {

    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        quizname: "",
        description: "",
        type: "",
        timelimit: 0
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    function isEmpty(str) {
        return !str || str.trim().length === 0;
    }

    async function handleSubmit() {
        const { quizname, description, type, timelimit } = formValues;
            const testdata = {
                quizname, description, type, timelimit
            };

            if (isEmpty(testdata.quizname) || isEmpty(testdata.description) || isEmpty(testdata.type)||timelimit===0) {
                alert("At least one input is empty!");
                return;
            }

            console.log(testdata);
            const docRef = await addDoc(collection(db, "tests"), testdata);
            const testid = docRef.id;
            setFormValues({
                quizname: "",
                description: "",
                type: "",
                timelimit: 0
            });
            navigate(`/create/${testid}`);
    };

    return (
        <div className="alltest-wrapper" >
            <div className="create-quiz-card">
                <div>
                    <strong>Create quiz</strong>
                    <div >
                        <label>Quiz name</label>
                        <input id="title" type="text" name="quizname" className="form-control" onChange={handleChange} required></input>
                    </div>
                    <div >
                        <label>Description</label>
                        <input id="desc" type="text" name="description" className="form-control" onChange={handleChange} required></input>
                    </div>
                    <div className="button-wrapper">

                        <div><label htmlFor="MCQ"> MCQ</label>
                        <input id="MCQ" type="checkbox" value="MCQ" name="MCQ"  onChange={handleChange} required></input></div>
                        

                        <div><label>Time Limit (mins) :</label>
                        <input type="number" id="quantity" name="timelimit" min="0" max="180" onChange={handleChange}></input></div>
                        
                    </div>
                    
                    <button className="btn" onClick={handleSubmit} >
                            Save
                    </button>
                </div>
            </div>
            <img src={exampleImage} alt="Educator illustration" className="illustration"></img>
        </div>

    )
}
export default CreateForm;
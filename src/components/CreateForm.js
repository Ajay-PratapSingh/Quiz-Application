import { useState } from "react";
import "./CreateForm.css"
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
        
           if (isEmpty(quizname) || isEmpty(description)||isEmpty(type)||timelimit===0) {
                alert("At least one input is empty!");
                return;
            }
        
            const testdata = {
                quizname, description, type, timelimit
            };

            console.log(testdata);
            const docRef = await addDoc(collection(db, "tests"), testdata);
            const testid = docRef.id;
            setFormValues({
                quizname: "",
                description: "",
                type: "",
                timelimit: 0
            });
            navigate(`/${testid}/edit`);
    };

    return (
        <div className="createform-wrapper" >
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
                        <input id="MCQ" type="checkbox" value="MCQ" name="type"  onChange={handleChange} required></input></div>
                        

                        <div><label>Time Limit (mins) :</label>
                        <input type="number" id="quantity" name="timelimit" min="0" max="180" onChange={handleChange}></input></div>
                        
                    </div>
                    <div className="span"></div>
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
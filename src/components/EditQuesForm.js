import React, { useState } from 'react';
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from '../config/firebase';


export default function EditQuesForm(props) {


    const docId = props.quesdetails.id;
    const testid = props.testid;

    const docRef = doc(db, "tests", testid, "Questions", docId);

    const [showConfirmation, setShowConfirmation] = useState(false);

    const [inputValues, setInputValues] = useState({
        prompt: props.quesdetails.prompt,
        opt1: props.quesdetails?.options[0],
        opt2: props.quesdetails?.options[1],
        opt3: props.quesdetails?.options[2],
        opt4: props.quesdetails?.options[3],
        ans: props.quesdetails?.ans
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    function isEmpty(str) {
        return !str || str.trim().length === 0;
    }

    function checkEmptyString(arr) {
        return arr.some(function (el) {
            return el === "";
        });
    }

    const handleDelete = async (event)=>{
        event.preventDefault();
        await props.onDelete(docId);
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 2000);
    } 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { prompt, opt1, opt2, opt3, opt4, ans } = inputValues;
        const options = [opt1, opt2, opt3, opt4];

        const data = {
            prompt,options,ans
        };

        console.log(data)
        if (isEmpty(data.prompt) || checkEmptyString(data.options) || isEmpty(data.ans)) {
            alert("At least one input is empty!");
            return;
        }
        await props.onUpdate(docId,data);

        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 2000);
    };


    return (
        <div>
            {showConfirmation && (
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm3.354 5.354a.5.5 0 1 1 .707.707L7.707 11.21l-2.854-2.853a.5.5 0 1 1 .708-.708l2.146 2.147L11.06 5.06z" />
                    </svg>
                    <span>Question Updated successfully!</span>
                </div>
            )}
            <form className='card'>
                <label>
                    Question:
                    <input type="text" name="prompt" value={inputValues.prompt} onChange={handleChange} className='editinputfield' />
                </label>
                <label>
                    Option 1:
                    <input type="text" name="opt1" value={inputValues.opt1} onChange={handleChange} />
                </label>
                <label>
                    Option 2:
                    <input type="text" name="opt2" value={inputValues.opt2} onChange={handleChange} />
                </label>
                <label>
                    Option 3:
                    <input type="text" name="opt3" value={inputValues.opt3} onChange={handleChange} />
                </label>
                <label>
                    Option 4:
                    <input type="text" name="opt4" value={inputValues.opt4} onChange={handleChange} />
                </label>
                <label>
                    Answer:
                    <input type="text" name="ans" value={inputValues.ans} onChange={handleChange} />
                </label>

                <button className='btn' onClick={handleSubmit}>Update</button>
                <button className='btn' onClick={handleDelete}>Delete</button>
            </form>
        </div>
    );
}
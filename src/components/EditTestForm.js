import React, { useRef, useState } from 'react';
import "./Card.css"
import { collection, addDoc } from "firebase/firestore";
import { db } from '../config/firebase';


export default function EditTestForm(props) {
  const subCollectionRef = collection(db, "tests", `${props.testid}`, "Questions");

  const [showConfirmation, setShowConfirmation] = useState(false);

  const promptref = useRef("");
  const opt1ref = useRef("");
  const opt2ref = useRef("");
  const opt3ref = useRef("");
  const opt4ref = useRef("");
  const ansref = useRef("");

  function isEmpty(str) {
    return !str || str.trim().length === 0;
  }

  function checkEmptyString(arr) {
    return arr.some(function (el) {
      return el === "";
    });
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    const prompt = promptref.current.value;
    const options = [opt1ref.current.value, opt2ref.current.value, opt3ref.current.value, opt4ref.current.value];
    const ans = ansref.current.value;
    const data = {
      prompt, options, ans
    };

    if (isEmpty(data.prompt) || checkEmptyString(data.options) || isEmpty(data.ans)) {
      alert("At least one input is empty!");
      return;
    }

    const docref=await addDoc(subCollectionRef, data);

    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);

    promptref.current.value = '';
    opt1ref.current.value = '';
    opt2ref.current.value = '';
    opt3ref.current.value = '';
    opt4ref.current.value = '';
    ansref.current.value = '';
  };

  return (
    <div>
      <h2>Add Questions to this quiz</h2>

      {showConfirmation && (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm3.354 5.354a.5.5 0 1 1 .707.707L7.707 11.21l-2.854-2.853a.5.5 0 1 1 .708-.708l2.146 2.147L11.06 5.06z" />
          </svg>
          <span>Question added successfully!</span>
        </div>
      )}
      <form onSubmit={handleSubmit} className='quiz-edit-card'>
        <label>
          Question:
          <input type="text" name="prompt" ref={promptref} className='editinputfield' />
        </label>
        <label>
          Option 1:
          <input type="text" name="opt1"  ref={opt1ref} />
        </label>
        <label>
          Option 2:
          <input type="text" name="opt2"  ref={opt2ref} />
        </label>
        <label>
          Option 3:
          <input type="text" name="opt3"  ref={opt3ref} />
        </label>
        <label>
          Option 4:
          <input type="text" name="opt4"  ref={opt4ref} />
        </label>
        <label>
          Answer:
          <input type="text" name="ans" ref={ansref} />
        </label>
        <button type="submit" className='btn' onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}
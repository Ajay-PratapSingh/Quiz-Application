import React, { useState } from 'react';
import "./Card.css"
import { collection, addDoc } from "firebase/firestore";
import { db } from '../config/firebase';
import { Link, useParams } from 'react-router-dom';

export default function EditTestForm() {
  const params=useParams();
  const testid=params.testid;
  const subCollectionRef = collection(db, "tests",`${testid}`, "Questions");

  const [showConfirmation, setShowConfirmation] = useState(false);

  const [formValues, setFormValues] = useState({
    prompt: '',
    opt1: '',
    opt2: '',
    opt3: '',
    opt4: '',
    ans: '',
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const { prompt,opt1, opt2, opt3, opt4,ans } = formValues;
    const options=[opt1, opt2, opt3, opt4];
    const data = {
      prompt,
      options,
      ans,
    };
    if (isEmpty(data.prompt) || isEmpty(data.options) || isEmpty(data.ans)) {
      alert("At least one input is empty!");
      return;
    }
    console.log(data);
    addDoc(subCollectionRef,data);
    setFormValues({
        prompt: '',
        opt1: '',
        opt2: '',
        opt3: '',
        opt4: '',
        ans: '',
      });

    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  return (
    <div>
      <h2>Add Questions to this quiz</h2>

      {showConfirmation && (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm3.354 5.354a.5.5 0 1 1 .707.707L7.707 11.21l-2.854-2.853a.5.5 0 1 1 .708-.708l2.146 2.147L11.06 5.06z"/>
          </svg>
          <span>Question added successfully!</span>
        </div>
      )}
    <form onSubmit={handleSubmit} className='quiz-edit-card'>
      <label>
        Question:
        <input type="text" name="prompt" value={formValues.prompt} onChange={handleChange} className='editinputfield'/>
      </label>
      <label>
        Option 1:
        <input type="text" name="opt1" value={formValues.opt1} onChange={handleChange} />
      </label>
      <label>
        Option 2:
        <input type="text" name="opt2" value={formValues.opt2} onChange={handleChange} />
      </label>
      <label>
        Option 3:
        <input type="text" name="opt3" value={formValues.opt3} onChange={handleChange} />
      </label>
      <label>
      Option 4:
        <input type="text" name="opt4" value={formValues.opt4} onChange={handleChange} />
      </label>
      <label>
        Answer:
        <input type="text" name="ans" value={formValues.ans} onChange={handleChange} />
      </label>
      <button type="submit" className='btn' onClick={handleSubmit}>Add</button>
    </form>
    <Link to={"/tests"} className='btn'>Finish</Link>
    </div>
  );
}
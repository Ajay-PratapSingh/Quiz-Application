import React, { useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import "./Card.css";
export default function TestWindow(props) {

	const params=useParams();
	const testid=params.testid;

	const questions=useLoaderData();

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	

	const handleAnswerOptionClick = (givenans) => {
		if (givenans===questions[currentQuestion].ans) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	if(questions.length===0){
		return(
			<div>
			<h1>No Questions Available for this quiz</h1>
			<Link to={`/create/${testid}`} className="btn">Add Questions</Link>
			</div>
		)
	}

	return (
		<div>
		<h2>{props.quizname}</h2>
		<div className="card">
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].prompt}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].options.map((answerOption) => (
							<button className='answer-button' onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption}</button>
						))}
					</div>
				</>
			)}
		</div>
		</div>
	);
}

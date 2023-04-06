import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams, useRouteLoaderData } from 'react-router-dom';
import "./Card.css";
export default function TestWindow(props) {

	const params = useParams();
	const testid = params.testid;

	const questions = useRouteLoaderData("questions");

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [seconds, setSeconds] = useState(props.time*60);


	useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        if (seconds === 0) {
            clearInterval(interval);
			setShowScore(true);
        }
        return () => clearInterval(interval);
    }, [seconds]);



	const handleAnswerOptionClick = (givenans) => {
		if (givenans === questions[currentQuestion].ans) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}

		else {
			setSeconds(0);
			setShowScore(true);
		}
	};

	if (questions.length === 0) {
		return (
			<div>
				<h1>No Questions Available for this quiz</h1>
				<Link to={`/create/${testid}`} className="btn">Add Questions</Link>
			</div>
		)
	}

	return (
		<Fragment>
		<div>
        {seconds>0 && <strong>Timer:{Math.floor(seconds/60)}:{seconds%60}</strong>}
        {seconds === 0 && <div><h1>Test Ended!</h1><Link to={"/"} className='btn'>Exit</Link></div> }
        </div>
		<div>
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
		</Fragment>
	);
}

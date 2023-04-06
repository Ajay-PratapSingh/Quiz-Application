import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const Card = (props) => {
    const testid=props.Id
    return (
        <Fragment>
            <div className="card">
                <strong>Title</strong>
                <p>{props.CardTitle}</p>
                <strong>Description</strong>
                <p>{props.CardDescription}</p>
                <p>Time limit: {props.timelimit} min</p>
                {props.default?<p className="warning">this is a default quiz and CAN'T be deleted for functionality demonstration,try ading a new quiz</p>:<p className="warning">this quiz is NOT a default quiz and CAN be deleted</p>}
                <div button-wrapper>
                <Link to={`/${testid}/attempt`} className="btn">Attempt Quiz</Link>
                <Link to={`/${testid}/edit`} className="btn">Edit Quiz</Link>
                <button className="btn" onClick={() => { props.onDeleteItem(props.Id) }}>Delete</button>
                </div>
            </div>
        </Fragment>
    )
}
export default Card;
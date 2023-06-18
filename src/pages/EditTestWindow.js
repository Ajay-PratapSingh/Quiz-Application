import React, { Fragment, useEffect, useState } from 'react'
import EditQuesForm from '../components/EditQuesForm'
import EditTestForm from '../components/EditTestForm'
import { Link, useParams, useRouteLoaderData } from 'react-router-dom';
import "../components/Card.css";
export default function () {
    const params = useParams();
    const testid = params.testid;
    const loadedquesarr = useRouteLoaderData("questions");
    const [quesarr, setQuesarr] = useState(loadedquesarr);


    return (
        <Fragment>
            <EditTestForm testid={testid}></EditTestForm>
            <div className='alltest-wrapper'>
            {quesarr.map((ques, index) => (<div><strong>Question {index + 1} </strong><EditQuesForm quesdetails={ques} testid={testid} /></div>))}
            </div>
            <Link to={"/tests"} className='btn'>Finish</Link>
        </Fragment>
    )
}

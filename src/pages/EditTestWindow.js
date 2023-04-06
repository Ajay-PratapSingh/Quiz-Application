import React, { Fragment, useEffect, useState } from 'react'
import EditQuesForm from '../components/EditQuesForm'
import EditTestForm from '../components/EditTestForm'
import { Link, useParams} from 'react-router-dom';
import "../components/Card.css";
import { db } from '../config/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
export default function () {
    
    const [quesarr, setQuesarr] = useState([]);
    
    const params = useParams();
    const testid = params.testid;

    useEffect(() => {
        getQuesList();
    }, []);

    const subCollectionRef = collection(db, "tests", testid, "Questions");

    const getQuesList = async () => {
        const id = testid;
        const docsSnap = await getDocs(collection(db, `tests/${id}/Questions`));
        const arr = docsSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setQuesarr(arr);
    }

    async function AddNewQues(item) {
        await addDoc(subCollectionRef, item);
        getQuesList();
    }

    async function DeleteQues(docId) {
        const docRef = doc(db, "tests", testid, "Questions", docId);
        await deleteDoc(docRef);
        getQuesList();
    }

    async function UpdateQues(docId,data) {
        const docRef = doc(db, "tests", testid, "Questions", docId);
        await updateDoc(docRef,data);
        getQuesList();
    }

    return (
        <Fragment>
            <EditTestForm testid={testid} onNewSave={AddNewQues}></EditTestForm>
            <div className='alltest-wrapper'>
                {quesarr.map((ques, index) => (<div>
                    <strong>Question {index + 1}</strong>
                    <EditQuesForm quesdetails={ques} testid={testid} onUpdate={UpdateQues} onDelete={DeleteQues} />
                </div>))}
            </div>
            <Link to={"/tests"} className='btn'>Finish</Link>
        </Fragment>
    )
}

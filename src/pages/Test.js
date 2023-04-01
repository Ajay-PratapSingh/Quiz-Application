import { collection, doc, getDoc, getDocs, or } from 'firebase/firestore';
import { db } from '../config/firebase';
import TestWindow from "../components/TestWindow";
import { useParams } from 'react-router-dom';
import Timer from '../components/Timer';
import { useEffect, useState } from 'react';

const Test = () => {
    const params = useParams();
    const testid = params.testid;

    const [documentData, setDocumentData] = useState(null);
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
        async function fetchDocument() {
            const docRef = doc(db,"tests",testid);
            const docSnap = await getDoc(docRef);
            setDocumentData(docSnap.data());
            setLoading(false);
        }
        fetchDocument();
    }, []);

    console.log(documentData);

    return (
        <div>
            {loading ? <p>Loading...</p> :<div> <Timer time={documentData.timelimit}/> <TestWindow quizname={documentData.quizname}/></div>}     
        </div>
    )
}
export default Test;

export async function loader({ request, params }) {
    const id = params.testid;
    const docsSnap = await getDocs(collection(db, `tests/${id}/Questions`));
    const arr = docsSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
    console.log(arr)
    return (arr);
}


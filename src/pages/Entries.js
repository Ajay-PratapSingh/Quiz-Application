import { Fragment, useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc} from "firebase/firestore";
import { db } from "../config/firebase";
import Card from "../components/Card";
import "../components/Card.css";

const Entries = () => {

    

    useEffect(() => {
            getNotesList();
    }, []);

    const [Notesarr, setNotesarr] = useState([]);

    const testcollectionref = collection(db, "tests");

    const getNotesList = async () => {
        const data = await getDocs(testcollectionref);
        const filtereddata = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        console.log(filtereddata)
        setNotesarr(filtereddata);
    }


    async function DeleteNote(id) {
        const notedoc = doc(db, "tests", id);
        await deleteDoc(notedoc);
        getNotesList();
    }


    return (
        <Fragment>
            <h1>All tests</h1>
            <div className="alltest-wrapper">
            {Notesarr.length>0 && Notesarr.map((ele)=>(<Card default={ele.default}
            Id={ele.id}
            onDeleteItem={DeleteNote}
            CardTitle={ele.quizname}
            CardDescription={ele.description}
            timelimit={ele.timelimit}/>))}
            </div>
        </Fragment>
    )
}
export default Entries;

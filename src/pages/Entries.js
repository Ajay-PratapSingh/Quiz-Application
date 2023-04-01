import { useEffect, useState } from "react";
import Notes from "../components/Notes";
import { getDocs, collection, deleteDoc, doc} from "firebase/firestore";
import { db } from "../config/firebase";

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
        <Notes notes={Notesarr} onDelete={DeleteNote}/>
    )
}
export default Entries;
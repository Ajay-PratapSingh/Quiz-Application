import React from 'react';
import EditTestForm from "../components/EditTestForm";

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

export default function EditTestWindow({ children }) {

    return (
        <EditTestForm/>
    )
}
export async function loader({ request, params }) {
    const id = params.testid;
    const docsSnap = await getDocs(collection(db, `tests/${id}/Questions`));
    const arr = docsSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
    console.log(arr)
    return (arr);
}

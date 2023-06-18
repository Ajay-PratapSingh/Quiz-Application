import { redirect } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../config/firebase"
import { Fragment } from "react";
import Loginform from "../components/Loginform";

const Auth = () => {
    return (
        <Fragment>
        <Loginform/>
        </Fragment>
    )
}
export default Auth;

export async function action({ request }) {

    async function signup(auth,email, password) {
       await createUserWithEmailAndPassword(auth,email, password)
    }

    async function login(auth,email, password) {
        await signInWithEmailAndPassword(auth, email, password)
    }


    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get('mode') || 'login';

    const data = await request.formData();
    const  email= data.get("email")
    const  password= data.get("password")

    if(mode==="login"){login(auth,email,password)}
    else{
        signup(auth,email,password);
        alert("New User Registered");
    };

    if(auth?.currentUser?.uid){
        return redirect('/profile');
    }

    return("/");
    
}
   
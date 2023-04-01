import { useState } from 'react';
import './Login.css';
import {Fragment} from 'react';
const Register=()=>{
    const [newusername, setNewUsername] = useState('');
    const [newpassword, setNewPassword] = useState('');

    const NewUsernameChangeHandler = (event) => {
        setNewUsername(event.target.value);
    }

    const NewPasswordChangeHandler = (event) => {
        setNewPassword(event.target.value);
    }

    const RegisterHandler = () => {
        if(newusername.trim.length===0 || newpassword.trim.length===0){
            return;
        }
        
    }


    return (
        <Fragment>
            <section className="login-form-bd">
                <div className="form-wrapper">
                    <div className="form-container">
                        <h1> Please Login</h1>
                        <div class="form-control">
                            <input type="text" value={newusername} onChange={NewUsernameChangeHandler}></input>
                            <label> Username</label>
                        </div>
                        <div class="form-control">
                            <input type="password" value={newpassword} onChange={NewPasswordChangeHandler}></input>
                            <label> Password</label>
                        </div>
                        <button className="login-btn" onClick={RegisterHandler}>Login</button>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}
export default Register;
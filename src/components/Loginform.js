import { Form, Link, useSearchParams } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export default function Loginform() {
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';



    const { googleSignIn } = UserAuth();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        }
        catch (error) {
            console.log(error);
        }
    }


    return (
        <Form method='post'>
            <div className="card">
                <div>
                    <strong>{isLogin ? "Please Login" : "Please Register"}</strong>
                    <div >
                        <label htmlFor="email"> email</label>
                        <input id="email" type="email" name="email" className="form-control" required></input>
                    </div>
                    <div >
                        <label htmlFor="password"> Password</label>
                        <input id="password" type="password" name="password" className="form-control" required></input>
                    </div>
                    <div className="button-wrapper">

                        <button className="btn">
                            Save
                        </button>
                        <button className="btn" onClick={handleGoogleSignIn}>
                            Google
                        </button>
                        <Link to={`?mode=${isLogin ? 'signup' : 'login'}`} className="btn">
                            {isLogin ? 'Register' : 'Login'}
                        </Link>
                    </div>
                </div>
            </div>
        </Form >
    )
}

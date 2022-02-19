import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_uri = location?.state?.from || "/home";
    const {
        userSignIn,
        signInUsingGoogle,
        setUser,
        setError,
        setIsLoading,
        forgetPassword,
        error,
        user,
    } = useAuth();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginForm = (e) => {
        e.preventDefault();
        userSignIn(email, password)
            .then((res) => {
                setIsLoading(true);
                const user = res.user;
                setUser(user);
                navigate(redirect_uri);
                setError("");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleForgetPassword = (e) => {

        forgetPassword(email)
            .then(() => {
                alert("Password reset email sent!");
                setError("");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
        e.preventDefault();
    };

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then((result) => {
                setIsLoading(true);
                const user = result.user;
                setUser(user);
                navigate(redirect_uri);
                setError("");
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <div className='login-section'>

            <div className='form-middle'>
                <h1 className='color-text' >ANIME MAZE</h1>
                <form action="" onSubmit={handleLoginForm}>
                    <div className='form-conf'>

                        <p className='label-name'>Email ID &nbsp; &nbsp;: &nbsp; &nbsp;</p>
                        <input type="email" name="email" onBlur={handleEmailChange} id="email" />

                    </div>
                    <div className='form-conf'>
                        <p className='label-name pass'>Password  &nbsp;: </p>
                        <input type="password" name="password" onBlur={handlePasswordChange} id="password" />

                    </div>
                    <input className='form-submit' type="submit" value="submit" />
                    <button
                        className="google-btn"
                        onClick={handleGoogleSignIn}
                    >
                        Google LogIn
                    </button>
                </form>
                <br />
                <Link
                    onClick={handleForgetPassword}
                    className="color-text"
                    to="/register"
                    style={{ textDecoration: "none" }}
                >
                    Forget Password ?
                </Link>


                <br /><br />

                <Link className='color-text' style={{ textDecoration: "none" }} to='/register'>Not User? Please Regiser</Link>
                {error && <p style={{ color: "white" }}>Error Please try again</p>}
            </div >
        </div >
    );
};

export default Login;
'react-router-dom';

import { getAuth, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Register = () => {

    const {
        userRegister,
        setUser,
        setError,
        setIsLoading,
        updateInfo,
        error,
    } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location?.state?.from || "/";

    const handleNameChange = (e) => {
        const nameC = e.target.value;
        console.log(nameC);
        setName(nameC);
    };

    const handleEmailChange = (e) => {
        const emailC = e.target.value;
        console.log(emailC);
        setEmail(emailC);
    };

    const handlePasswordChange = (e) => {
        const passwordC = e.target.value;
        console.log(passwordC);
        console.log(passwordC.length);
        if (passwordC.length < 6) {
            alert("Password length must be greater than 6 character");
        } else {
            setPassword(passwordC);
        }
    };

    const handleCheckPasswordChange = (e) => {
        const cPassword = e.target.value;
        console.log(cPassword);
        if (password !== cPassword) {
            console.log("Password didn't match");
        }
    };


    const handleRegisterForm = (e) => {
        e.preventDefault();
        userRegister(email, password)
            .then((res) => {
                setIsLoading(true);
                updateInfo(name);
                const user = res.user;
                setUser(user);
                verifyEmail(email);
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

    const verifyEmail = (email) => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser).then(() => { });
    };

    return (
        <div className='login-section'>

            <div className='form-middle'>
                <h1 className='color-text' >ANIME MAZE</h1>
                <form action="" onSubmit={handleRegisterForm} >
                    <div className='form-conf'>
                        <p className='label-name pass'> Name  &nbsp; &nbsp;&nbsp; </p>

                        <input type="text" name="name" onBlur={handleNameChange} id="name" />

                    </div>
                    <div className='form-conf'>
                        <p className='label-name pass'>Email </p>
                        <input type="email" name="email" onBlur={handleEmailChange} id="email" />

                    </div>
                    <div className='form-conf'>
                        <p className='label-name pass'>Password  &nbsp;</p>
                        <input type="password" name="password" onBlur={handlePasswordChange} id="password" />
                    </div>
                    <div className='form-conf'>
                        <p className='label-name pass'>
                            Re-Password  &nbsp; </p>
                        <input type="password" name="password" onBlur={handleCheckPasswordChange} id="password" />
                    </div>
                    <input className='form-submit' type="submit" value="Register" />
                </form>
                <p className="color-text">
                    Already registered ?{" "}
                    <Link
                        className="color-text"
                        to="/login"
                        style={{ textDecoration: "none" }}
                    >
                        Login Now
                    </Link>
                </p>
                {error && <p style={{ color: "white" }}>{error}</p>}
            </div >
        </div >
    );
};

export default Register;
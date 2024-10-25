import React, { useContext, useState } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


const Login = () => {

    const { googleSignIn, signIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogle = () => {
        googleSignIn().then((result) => {
            toast.success("Successfully logged in ");
            navigate(location?.state ? location.state : '/')
        });
    };

    const handleLogIn = () => {
        if ((email, password)) {
            signIn(email, password).then(result => {
                
                toast.success("Successfully logged in ");
                navigate(location?.state ? location.state : '/')
            })
                .catch((error) => {
                    setError(error.message);
                })
        }
    }
    return (
        <div className='pb-8 h-auto w-10/12 lg:w-3/12 mx-auto my-12 bg-red-50 rounded-lg flex flex-col justify-center items-center gap-5'>
            <h2 className='text-red-900 text-2xl font-bold mt-5'>LOGIN</h2>
            <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Type Email"
                className="w-11/12 mx-auto input input-bordered" />

            <input onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Type Passwor"
                className="w-11/12 mx-auto input input-bordered" />

            <p className='text-red-900 text-base text-center'>{error}</p>

            <button onClick={handleLogIn} className='loginBtn bg-red-900 w-11/12 mx-auto h-10 text-white text-lg font-bold rounded-lg'>Login</button>
            <button onClick={handleGoogle} className='googleLoginBtn bg-red-900 w-11/12 mx-auto h-10 text-white text-lg font-bold rounded-lg'>Google login</button>

            <p>Dont have an account? <Link className="hover:text-red-900 underline" to ="/register">Register</Link></p>
            <ToastContainer />
        </div>
    );
};

export default Login;

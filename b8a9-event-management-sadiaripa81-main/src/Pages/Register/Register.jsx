import React, { useContext, useState } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import { useNavigate ,useLocation} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


const Register = () => {
    const { signUp } = useContext(AuthContext);
    const { googleSignIn, signIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userName, setUserName] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleRegister = () => {
        googleSignIn().then((result) => {
            toast.success("Successfully Registered ");
            navigate(location?.state ? location.state : '/')
        });
    };
    const handleRegister = () => {
        if (!/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
            setError('Your password must contain 1 capital letter, 1 special symbol and minimum six character.')
        } else {
            setEmail("");
            if (email) {
                signUp( email, password)
                    .then(() => {
                        toast.success("Successfully Registered");
                        navigate(location?.state ? location.state : '/')
                    })
                    .catch((error) => {
                        setError(error.message);
                    })
            }
        }
    }
    return (
        <div className='h-auto w-10/12 lg:w-3/12 mx-auto my-12 pb-8 rounded-lg bg-red-50 flex flex-col justify-center items-center gap-5'>
            <h2 className='text-red-900 text-2xl font-bold mt-5'>REGISTER</h2>
            <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Type user name"
                className="w-11/12 mx-auto input input-bordered" />

            <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Type Email"
                className="w-11/12 mx-auto input input-bordered" />

            <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Type Password"
                className="w-11/12 mx-auto input input-bordered" />

            <p className='text-red-900 font-bold text-base text-canter'>{error}</p>

            <button onClick={handleRegister} className='loginBtn bg-red-900 h-10 w-11/12 mx-auto text-white text-lg font-bold rounded-lg'>Register</button>
            <button onClick={handleGoogleRegister} className='googleLoginBtn bg-red-900 w-11/12 mx-auto h-10 text-white text-lg font-bold rounded-lg'>Google register</button>
            <p>Already have an account? <Link className="hover:text-red-900 underline" to ="/login" >Login</Link></p>
            <ToastContainer />
    </div>
    );
};

export default Register;
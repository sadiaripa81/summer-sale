
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../firebase/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then()
    }
    return (
        <div className="w-11/12 mx-auto mb-5 lg:mb-0 lg:h-32 gap-3 flex flex-col lg:flex-row  items-center justify-between text-black font-bold">
            <div className="w-36">
                <img className="w-full" src="https://i.ibb.co/ynjBFLC/images.png" alt="Logo" />
            </div>
            
            <div>
                <ul className="flex flex-wrap justify-center gap-8 text-sm lg:text-2xl">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-900 underline font-bold" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/About"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-900 underline font-bold" : ""
                            }
                        >
                            About us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/cart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-900 underline font-bold" : ""
                            }
                        >
                            Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#bb3f3f] underline font-bold" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </div>

            {
                user &&
                <div className='flex justify-center items-center gap-3'>
                <div className='h-8 w-8'>{user?.photoUrl}</div>
                <div>
                    <p className='text-lg'>{user?.email}</p>
                    <p className='text-lg'>{user?.displayName}</p>
                    
                    {user && <button onClick={handleLogOut} className='w-20 h-7 rounded-lg text-white bg-red-900 hover:bg-red-950'>Log out</button>}
                </div>
            </div>
            }
        </div>
    );
};

export default Navbar;
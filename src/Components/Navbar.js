import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProviders'

function Navbar() {
    const [toggle, setToggle] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <>
            <nav className="bg-[#00B8A8] border-gray-200 dark:bg-gray-900 fixed w-full z-10 py-2">
                <div className="flex flex-wrap items-center justify-between max-w-[85%] mx-auto">
                    <div className="flex items-center">
                        <h1 className="logo self-center whitespace-nowrap text-white">Protybeshi</h1>
                    </div>
                    <div className='md:order-2 flex items-center space-x-4'>
                        {user && <div className="relative" onClick={() => setToggle(!toggle)}>
                            {user.photoURL ? <img className='h-12 rounded-full cursor-pointer' src={user.photoURL} alt="" /> : <img className='h-12 rounded-full cursor-pointer' src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent.png" alt="" />
                            }
                            {toggle && (
                                <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-52 dark:bg-gray-700 dark:divide-gray-600">
                                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                        <div>{user.displayName}</div>
                                        <div className="font-medium truncate">{user.email}</div>
                                    </div>
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                                        <li>
                                            <Link to="/dashboard" className="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to="/profile" className="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                                        </li>
                                    </ul>
                                    <div className="py-2">
                                        <button onClick={handleLogOut} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</button>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                        }
                        <Link to="/additem">
                            <button className="bg-[#4E3CB8] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#30a219]">Start Listing</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
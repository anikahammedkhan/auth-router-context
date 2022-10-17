import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
    const { user } = useContext(AuthContext);
    const { logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log("sign out");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='login'>Login</Link></li>
                    <li><Link to='register'>Register</Link></li>
                    <li><Link to='orders'>Orders</Link></li>
                    {user?.email && <span>Welcome, {user.email}</span>}
                    {
                        user?.email ? <button onClick={handleSignOut} className='btn btn-sm btn-warning'>Sign Out</button> : null
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;
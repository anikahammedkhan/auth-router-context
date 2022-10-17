import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h1>this is home for {user?.displayName && <p>{user.displayName}</p>}</h1>
        </div>
    );
};

export default Home;
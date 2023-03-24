import React from 'react'

import useAuthContext from '../Context/AuthContext'

function Home() {
    const {user, getUser} = useAuthContext();
  
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5>Welcome {user?.name}</h5>
                </div>
                <div className="card-body">
                    <h5>Home Page</h5>
                </div>
                <div className="card-footer">
                    <h5>Footer</h5>
                </div>
            </div>
        </>
    )
}

export default Home
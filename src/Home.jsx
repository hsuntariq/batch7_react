import React from 'react'
import Sidebar from './Sidebar'
import Messagebar from './Messagebar'

const Home = () => {
    return (
        <>
            <div className="d-flex">

                <Sidebar />
                <Messagebar />
            </div>
        </>
    )
}

export default Home
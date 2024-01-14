import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <>
            <div className="d-flex align-items-center border mx-auto rounded-3" style={{ width: '96%' }}>
                <span>
                    <CiSearch size={30} />
                </span>
                <div className="sear w-100">

                    <input type="search" placeholder='Search or start a new chat' className="form-control bg-transparent p-0 border-0 my-2 rounded-1 mx-auto" />
                </div>
            </div>
        </>
    )
}

export default Search
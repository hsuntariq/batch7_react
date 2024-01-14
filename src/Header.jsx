import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";
import { FiMessageSquare } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Header = ({ darkMode, setDarkMode }) => {
    return (
        <>
            <div className={`w-100 mx-auto d-flex justify-content-between p-3 ${darkMode && 'bg-dark text-white'} `} >
                <div className="left">
                    <FaRegCircleUser cursor='pointer' size={40} />
                </div>
                <div className="right d-flex gap-2">

                    <RxUpdate onClick={() => setDarkMode(!darkMode)} cursor='pointer' size={40} />
                    <FiMessageSquare cursor='pointer' size={40} />
                    <BsThreeDotsVertical cursor='pointer' size={40} />
                </div>
            </div>
        </>
    )
}

export default Header
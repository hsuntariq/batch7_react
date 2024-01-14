import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";

const SingleAccordian = ({ answer, question }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="p-3 my-2 container bg-light d-flex justify-content-between">
                <div className="data">

                    <h5>{question}</h5>
                    {show && <p className="text-secondary">
                        {answer}
                    </p>}
                </div>
                <div className="icon">
                    {show ? <AiOutlineMinus size={30} cursor="pointer" onClick={() => setShow(false)} /> : <GoPlus size={30} cursor="pointer" onClick={() => setShow(true)} />}
                </div>
            </div>
        </>
    )
}

export default SingleAccordian
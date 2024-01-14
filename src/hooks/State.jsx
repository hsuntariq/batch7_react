import React, { useState } from 'react'

const State = () => {
    const [title, setTitle] = useState('Hello World')
    const click = () => {
        if (title === 'Hello World') {
            setTitle('Hello New World')
        } else {
            setTitle('Hello World')
        }

    }
    return (
        <>
            <h1>{title}</h1>
            <button onClick={click} className="btn btn-success">
                Click Me
            </button>
        </>
    )
}

export default State
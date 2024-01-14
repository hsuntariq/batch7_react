import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const check = (e) => {
        if (e.target.innerHTML === 'Increase') {
            setCount(count + 1)
        } else if (e.target.innerHTML === 'Reset') {
            setCount(0)
        } else {
            setCount(count - 1)
        }
    }
    return (
        <>
            <div className="container text-center">
                <h1>Counter</h1>
                <h1 className='display-1'>{count}</h1>
                <div className="d-flex gap-3 justify-content-center">
                    <button onClick={check} className="btn btn-danger">Decrease</button>
                    <button onClick={check} class="btn btn-outline-warning">Reset</button>
                    <button onClick={check} className="btn btn-success">Increase</button>
                </div>
            </div>
        </>
    )
}

export default Counter
import React from 'react'

const ShortCircuits = () => {
    let test = '3';

    return (
        <>
            {/* <h1>{test && 'Hello from the AND operator'}</h1>
            <h1>{test || 'Hello from the OR operator'}</h1> */}
            {
                test ? <h1 className='text-success'>TRUE</h1> : <h1 className='text-danger'>False</h1>
            }
        </>
    )
}

export default ShortCircuits
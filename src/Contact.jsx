import React from 'react'

const Contact = ({ name, image, message }) => {
    return (
        <>
            <div className="d-flex gap-3 p-1">
                <div className="image">
                    <img style={{ width: '60px', height: '60px', borderRadius: '50%' }} src={image} alt="" />
                </div>
                <div className="user-info">
                    <h5>{name}</h5>
                    <p>{message}</p>
                </div>
            </div>
        </>
    )
}

export default Contact
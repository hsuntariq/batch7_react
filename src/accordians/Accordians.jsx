import React from 'react'
import SingleAccordian from './SingleAccordian'
import { FAQs } from './data'

const Accordians = () => {
    return (
        <>
            <div className="container col-lg-7 mx-auto shadow p-4">
                <h1 className="display-4 text-center">
                    Accordian
                </h1>
                {FAQs.map((f) => {
                    return <SingleAccordian key={f.id} {...f} />
                })}
            </div>
        </>
    )
}

export default Accordians
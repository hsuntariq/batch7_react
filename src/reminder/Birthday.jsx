import { useState } from "react"
import SingleBirthday from "./SingleBirthday"
import { bdays } from "./data"

const Birthday = () => {
    const [data, setData] = useState(bdays)
    const removeBDay = (id) => {
        const newBDays = data.filter((item) => {
            return item.id !== id
        })
        setData(newBDays)
    }
    return (
        <>
            <div className="container col-lg-7 mx-auto shadow rounded-4 py-4">
                <h1 className="text-center display-4 p-3 my-5">
                    {data.length} birthdays today
                </h1>
                <div className="container">
                    {data.map((dmon) => {
                        return <SingleBirthday key={dmon.id} {...dmon} remove={removeBDay} />
                    })}
                </div>
                <button onClick={data.length === 0 ? () => setData(bdays) : () => setData([])} className={`btn ${data.length === 0 ? 'btn-success' : 'btn-danger'} mx-auto d-block`}>
                    {data.length === 0 ? 'Refresh All' : 'Remove All'}
                </button>
            </div>
        </>
    )
}

export default Birthday
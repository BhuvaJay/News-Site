import React from 'react'
import loader from './loader.gif'

function Spinner() {
    return (
        <div className="text-center mb-3">
            <img src={loader} alt="Loading..." />
        </div>
    )
}

export default Spinner

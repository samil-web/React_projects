import React from "react";

const Sidebar = ({ jobs, value, setValue }) => {

    return (
        <div className="btn-container">
            {jobs.map((j, index) => {
                const { company } = j
                return (
                    <button key={index}
                        onClick={() => setValue(index)}
                        className={`job-btn ${index === value && 'active-btn'}`}>
                        {company}
                    </button>
                )
            })}
        </div>
    )
}
export default Sidebar
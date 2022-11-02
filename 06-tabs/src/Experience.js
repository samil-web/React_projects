import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const Experience = ({ experience, value }) => {
    const { company, dates, duties, title } = experience[value]
    return (
        <div>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{dates}</p>
            {duties.map((duty, index) => {
                return (
                    <div key={index} className='job-desc'>
                        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                        <p>{duty}</p>
                    </div>

                )
            })}
        </div>
    )
}

export default Experience